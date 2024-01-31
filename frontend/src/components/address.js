import { Fragment, useContext, useEffect, useState } from "react";
import UserNativeBalanceCard from "./userNativeBalanceCard";
import UserTokenBalanceCard from "./userTokenBalanceCard";
import TransactionCard from "./transactionCard";
import { searchContext } from "../context/searchTermContext";
import { useParams } from "react-router-dom";
import AddressInfo from "../api/account";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";

const methods = [
    {
      name: "Email",
      description: "Send notification via email.",
    },
    {
      name: "SMS",
      description: "Send notification via SMS.",
    },
    {
      name: "No Notification",
      description: "Do not send any notification"
    }
];

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const AddressScreen = () => {
  const [txnType, setTxnType] = useState("transaction"); // transaction | internal_transaction
  const { setSearchTerm } = useContext(searchContext);
  const { hash } = useParams("hash");
  const [addressDetails, setAddressDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [modalopen, setModalOpen] = useState(false);
  const [alertMethod, setAlertMethod] = useState(methods[2]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    AddressInfo(hash)
      .then((res) => {
        setAddressDetails(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    setSearchTerm(hash);
  }, [hash]);

  return (
    <div className="w-full h-[88%] py-3 px-3 flex flex-row gap-x-6">
      <div className="min-w-56 w-1/4 h-full flex flex-col gap-y-6">
        <UserNativeBalanceCard
          nativeBalance={addressDetails?.nativeCoinBalance?.balance}
        />
        <UserTokenBalanceCard tokenBalance={addressDetails?.tokenBalance} />
      </div>
      <div className="w-full px-3">
        <div className="flex flex-row justify-between items-center px-3 py-2 rounded bg-slate-800">
          <div className="flex space-x-1 py-1">
            <div
              className={`h-full px-4 rounded-2xl font-bold border-2 border-slate-600 py-1 cursor-pointer ${
                txnType === "transaction" ? "bg-slate-700" : ""
              }`}
              onClick={() => setTxnType("transaction")}
            >
              Transction
            </div>
            <div
              className={`h-full px-4 rounded-2xl font-bold border-2 border-slate-600 py-1 cursor-pointer ml-2 ${
                txnType === "internal_transaction" ? "bg-slate-700" : ""
              }`}
              onClick={() => setTxnType("internal_transaction")}
            >
              Internal Transactions
            </div>
          </div>
          <div>
            <div
              className="h-full px-4 rounded-lg font-semibold text-slate-200 bg-green-900 py-2 cursor-pointer"
              onClick={openModal}
            >
              Add to WatchList
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-2 overflow-y-auto py-2 max-h-[90%]">
          <div className="w-full flex justify-between text-xs bg-slate-800 sticky -top-3 px-2 py-2 rounded cursor-pointer">
            <div className="text-sm text-slate-300 text-slate-100">Hash</div>
            <div className="text-sm text-slate-300">Block</div>
            <div className="text-sm text-slate-300">From</div>
            <div className="text-sm text-slate-300">To</div>
            <div className="text-sm text-slate-300">Time</div>
            <div className="text-sm text-slate-300">Value</div>
            <div className="text-sm text-slate-300">Gas Price</div>
          </div>
          {txnType === "transaction"
            ? addressDetails &&
              addressDetails.normalTransactionResult.result.map((txn, idx) => (
                <TransactionCard key={idx} txn={txn} />
              ))
            : addressDetails &&
              addressDetails.internalTransactionResult.result.map(
                (txn, idx) => <TransactionCard key={idx} txn={txn} />
              )}
        </div>
      </div>

      <Transition appear show={modalopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  <div className="mt-2">
                    <p className="text-sm text-center text-slate-900 rounded-lg px-2 py-1 border-dashed border-2 border-slate-400">{hash}</p>
                  </div>
                  </Dialog.Title>

                  <div className="mt-4">
                    <RadioGroup value={alertMethod} onChange={setAlertMethod}>
                      <div className="space-y-2">
                        {methods.map((plan) => (
                          <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ active, checked }) =>
                              `${
                                active
                                  ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                                  : ""
                              }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <div className="flex w-full items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className={`font-medium  ${
                                          checked
                                            ? "text-white"
                                            : "text-gray-900"
                                        }`}
                                      >
                                        {plan.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="span"
                                        className={`inline ${
                                          checked
                                            ? "text-sky-100"
                                            : "text-gray-500"
                                        }`}
                                      >
                                        <span>{plan.description}</span>{" "}
                                      </RadioGroup.Description>
                                    </div>
                                  </div>
                                  {checked && (
                                    <div className="shrink-0 text-white">
                                      <CheckIcon className="h-6 w-6" />
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        alert("hi");
                      }}
                    >
                      Set Alert!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddressScreen;
