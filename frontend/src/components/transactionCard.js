import { Link } from "react-router-dom";

const TimeAgo = (time) => {
  if (!time) return null;
  const date = new Date(time);
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);
  const years = Math.round(days / 365);

  if (seconds < 5) {
    return "now";
  }
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  if (hours < 36) {
    return "a day ago";
  }
  if (days < 30) {
    return `${days} days ago`;
  }
  if (days < 45) {
    return "a month ago";
  }
  if (days < 365) {
    return `${months} months ago`;
  }
  if (years < 1.5) {
    return "a year ago";
  }
  return `${years} years ago`;
};

const TransactionCard = ({ txn }) => {
  return (
    <div className="w-full flex items-center justify-between text-xs bg-slate-700 px-2 py-2 rounded cursor-pointer hover:bg-slate-600">
      <Link
        to={"/txn/" + txn?.hash}
        className="text-sm text-slate-300 text-slate-100 border-2 border-slate-700 px-2 py-1 transition duration-300 border-dashed rounded-lg hover:border-slate-300"
      >
        {txn?.hash.slice(0, 16) + "..."}
      </Link>
      <div className="text-sm text-slate-300">{txn?.block_number}</div>
      <Link
        to={"/address/" + txn?.from_address}
        className="text-sm text-slate-300 border-2 border-slate-700 px-2 py-1 transition duration-300 border-dashed rounded-lg hover:border-slate-300"
      >
        {txn?.from_address.slice(0, 16) + "..."}
      </Link>
      <Link
        to={"/address/" + txn?.to_address}
        className="text-sm text-slate-300 border-2 border-slate-700 px-2 py-1 transition duration-300 border-dashed rounded-lg hover:border-slate-300"
      >
        {txn?.to_address.slice(0, 16) + "..."}
      </Link>
      <div className="text-sm text-slate-300">
        {TimeAgo(txn?.block_timestamp)}
      </div>
      <div className="text-sm text-slate-300">
        {(parseInt(txn?.value) / 1000000000000000000).toFixed(8)}
      </div>
      <div className="text-sm text-slate-300">
        {(parseInt(txn?.gas_price) / 1000000000).toFixed(8)}
      </div>
    </div>
  );
};
export default TransactionCard;
