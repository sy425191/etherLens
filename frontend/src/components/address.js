import { useContext, useEffect, useState } from "react";
import UserNativeBalanceCard from "./userNativeBalanceCard";
import UserTokenBalanceCard from "./userTokenBalanceCard";
import TransactionCard from "./transactionCard";
import { searchContext } from "../context/searchTermContext";
import { useParams } from "react-router-dom";
import AddressInfo from "../api/account";

const AddressScreen = () => {
  const [txnType, setTxnType] = useState("transaction"); // transaction | internal_transaction
  const { setSearchTerm } = useContext(searchContext);
  const { hash } = useParams("hash");
  const [addressDetails, setAddressDetails] = useState();
  const [loading, setLoading] = useState(true);

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
            <div className="h-full px-4 rounded-xl font-semibold text-slate-300 bg-slate-900 py-2 cursor-pointer">
              Set Alert
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
    </div>
  );
};

export default AddressScreen;
