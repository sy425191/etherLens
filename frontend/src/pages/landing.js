import { useState } from "react";
import { Navbar } from "../components";

const LandingPage = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="w-full h-full text-white bg-slate-900">
      <Navbar />

      {!search && (
        <div className="w-full h-[80%] flex justify-center items-center">
          <div className="w-1/2 flex flex-row justify-center items-center">
            <div className="text-4xl font-semibold max-w-96 z-10">
              <div>A Blockchain Explorer for the People</div>
              <div className="text-xs w-fit px-4 py-2 rounded-xl font-normal cursor-pointer border-2 border-slate-500 bg-slate-600 mt-4">
                CTRL + K to search
              </div>
            </div>
            <div className="absolute flex justify-center items-center">
              {/* arrow pointing to search of navbar */}
              <img
                src="/landing.png"
                alt="landing"
                className="w-1/4 mb-24 ml-24 -rotate-12"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
