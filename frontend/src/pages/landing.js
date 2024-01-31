import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchContext } from "../context/searchTermContext";

const LandingPage = () => {
  const { setSearchTerm } = useContext(searchContext);
  useEffect(() => {
    setSearchTerm("");
  }, []);
  
  return (
    <div className="w-full h-[80%] flex justify-center items-center">
      <div className="w-1/2 flex flex-row justify-center items-center">
        <div className="text-4xl font-semibold max-w-96 z-10">
          <div className="text-slate-300">
            A Blockchain Explorer for the ETHER
          </div>
          <Link
            to="/address/0x0aa8ebb6ad5a8e499e550ae2c461197624c6e667"
            className="text-sm w-fit px-2 py-1 rounded-xl font-normal cursor-pointer border-2 border-slate-500 bg-slate-600 mt-8"
          >
            See Preview
          </Link>
        </div>
        <div className="absolute flex justify-center items-center">
          {/* arrow pointing to search of navbar */}
          <img
            src="/landing.png"
            alt="landing"
            className="w-1/6 mb-48 ml-96 -rotate-12 opacity-10"
          />

          <div className="absolute -bottom-20 text-slate-600">
            Made with ❤️ by{" "}
            <a className="underline" href="https://github.com/sy425191">
              Saurabh Yadav
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
