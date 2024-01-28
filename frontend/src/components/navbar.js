import { useEffect, useRef } from "react";

const Navbar = ({ submitHandler, searchTerm, setSearchTerm }) => {
  const inpurRef = useRef(null);

  const handler = (event) => {
    const isCtrlK = event.ctrlKey && event.key === "k";
    const enterKey = event.key === "Enter";
    if (isCtrlK) {
      event.preventDefault();
      inpurRef.current.focus();
    } else if (enterKey) {
      submitHandler(searchTerm);
    }
  };

  const setEventListener = () => {
    inpurRef.current.focus();
    window.addEventListener("keydown", handler);
  };

  useEffect(() => {
    setEventListener();
    // submitHandler("0x0aa8ebb6ad5a8e499e550ae2c461197624c6e667")
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div className="w-full h-16 flex justify-between items-center bg-slate-800 cursor-pointer">
      <div
        className="px-3 font-semibold"
        onClick={() => {
          window.location.reload();
        }}
      >
        {" "}
        EtherLens{" "}
      </div>
      <div className="w-1/2 flex">
        <input
          type="text"
          className="w-full h-12 bg-slate-900 text-white px-4 outline-none rounded-l-xl"
          placeholder="Ctrl + K to search Address | Transaction"
          ref={inpurRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div
          className="h-12 flex justify-center items-center px-4 bg-slate-900 rounded-r-xl border-2 border-slate-500 cursor-pointer hover:bg-slate-500 transition duration-300 ease-in-out"
          onClick={() => {
            submitHandler(searchTerm);
          }}
        >
          Search
        </div>
      </div>
      <div className="flex justify-end items-center text-white pr-4">🔔</div>
    </div>
  );
};

export default Navbar;
