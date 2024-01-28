const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-slate-800">
      <div className=""> Block </div>
      <div className="w-1/2">
        <input
          type="text"
          className="w-full h-12 rounded-md bg-slate-900 text-white px-4 outline-none"
          placeholder="Ctrl + K to search"
        />
      </div>
      <div className="flex justify-end items-center text-white pr-4">
        🔔
      </div>
    </div>
  );
};

export default Navbar;
