const UserTokenBalanceCard = ({ tokenBalance }) => {
  return (
    <div className="w-full h-full overflow-y-auto gap-y-3 rounded-xl bg-slate-800">
      <div className="flex justify-between bg-gray-800 py-3 px-2 sticky top-0">
        <div className="px-3 font-bold text-slate-200 text-sm">
          ERC20 Tokens
        </div>
        <div className="px-3 font-bold text-slate-200 text-sm">
          {tokenBalance?.length}
        </div>
      </div>
      <div className="flex flex-col gap-y-2 px-3 py-2">
        {tokenBalance?.map((token, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-3 py-2 bg-slate-900 rounded-xl cursor-pointer hover:bg-slate-700 transition duration-300 ease-in-out ${token?.possible_spam && "bg-rose-300 text-rose-800 hover:bg-rose-800 hover:text-white border-2 border-rose-600"}`}
          >
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-sm">
                {token.symbol?.length > 10
                  ? token.symbol.slice(0, 10) + "..."
                  : token.symbol}
              </div>
              <div className="font-semibold text-xs">
                {token.name?.length > 10
                  ? token.name.slice(0, 10) + "..."
                  : token.name}
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-right font-semibold text-sm">
                {token.balance / 10 ** token.decimals}
              </div>
              {token?.possible_spam && (
                <div className="text-right font-semibold text-xs">
                  SPAM &#128545;
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTokenBalanceCard;
