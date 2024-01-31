import { Link } from "react-router-dom";

const AlertPage = () => {
  const alert = [
    {
      amount: 6,
      type: "deposit",
      account: "0x0aa8ebb6ad5a8e499e550ae2c461197624c6e667",
    },
    {
        amount: 1.2,
        type: "trans",
        account: "0x0aa8ebb6ad5a8e499e550ae2c461197624c6e667",
      },
      {
        amount: 12,
        type: "deposit",
        account: "0x0aa8ebb6ad5a8e499e550ae2c461197624c6e667",
      },
      {
        amount: 4.3,
        type: "deposit",
        account: "0x0aa8ebb6ad5a8e499e550ae2c461197624c6e667",
      },

  ];
  return (
    <div className="flex flex-col items-center gap-y-3 mt-3">
      {alert.map((val, idx) => {
        return (
          <div className="w-3/5 bg-slate-800 flex justify-center items-center text-slate-300 rounded px-3 py-2">
            <span className="text-slate-200 text-lg mx-4">{val.amount} </span> ETH 
            {
                val.type === "deposit" ? (
                    <span className="mx-2 px-2 py-1 text-green-300 border-dashed border-2 border-green-500 rounded">Deposited</span>
                ) : (
                    <span className="mx-2 px-2 py-1 text-rose-300 border-dashed border-2 border-rose-500 rounded">Withdrawl </span>
                )
            }
             on
            <Link
              to={"/address/"}
              className="mx-2 px-2 py-1 text-slate-300 border-dashed border-2 border-slate-500 rounded italic"
            >
              {val.account}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AlertPage;
