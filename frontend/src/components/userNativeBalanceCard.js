const UserNativeBalanceCard = ({ nativeBalance }) => {
    const ethBalance = nativeBalance ? (parseInt(nativeBalance) / 1000000000000000000) : '0'
  return (
    <div className="w-full min-h-36 flex flex-col justify-center items-center gap-y-3 rounded-xl bg-slate-800">
      <div className="px-3 font-bold text-slate-200 text-sm"><span className="text-xs text-slate-400"> Ξ </span> {ethBalance} </div>
      <div className="">
        <div className="text-white font-semibold text-xl text-slate-400">ETH</div>
      </div>
    </div>
  );
};

export default UserNativeBalanceCard;