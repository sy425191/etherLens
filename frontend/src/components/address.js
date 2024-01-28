import { useState } from "react";
import UserNativeBalanceCard from "./userNativeBalanceCard";
import UserTokenBalanceCard from "./userTokenBalanceCard";

const AddressScreen = ({ addressDetails }) => {
  const [txnType, setTxnType] = useState("all");

  return (
    <div className="w-full h-[88%] py-3 px-3 flex flex-row gap-x-6">
      <div className="min-w-56 w-1/4 h-full flex flex-col gap-y-6">
        <UserNativeBalanceCard
          nativeBalance={addressDetails?.nativeCoinBalance?.balance}
        />
        <UserTokenBalanceCard tokenBalance={addressDetails?.tokenBalance} />
      </div>
      <div className="w-full px-3 py-2">
        <div className="flex flex-row justify-between items-center px-3 py-2 rounded bg-slate-800">
          <div className="flex space-x-1 py-1">
            <div className="h-full px-4 rounded-3xl font-bold text-slate-900 bg-slate-400 py-1 cursor-pointer">
              Transactions
            </div>
            <div className="h-full px-4 rounded-3xl font-bold text-slate-900 bg-slate-400 py-1 cursor-pointer">
              Internal Transactions
            </div>
          </div>
          <div>
            <div className="h-full px-4 rounded-xl font-semibold text-slate-300 bg-slate-900 py-2 cursor-pointer">
              Set Alert 
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-6"></div>
      </div>
    </div>
  );
};

export default AddressScreen;
