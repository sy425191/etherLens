const EmptyLanding = ({ submitHandler }) => {
  return (
    <div className="w-full h-[80%] flex justify-center items-center">
      <div className="w-1/2 flex flex-row justify-center items-center">
        <div className="text-4xl font-semibold max-w-96 z-10">
          <div className="text-emerald-300">
            A Blockchain Explorer for the ETHER
          </div>
          <div
            className="text-sm w-fit px-2 py-1 rounded-xl font-normal cursor-pointer border-2 border-slate-500 bg-slate-600 mt-8"
            onClick={() => {
              submitHandler("0x0aa8ebb6ad5a8e499e550ae2c461197624c6e667");
            }}
          >
            See Preview
          </div>
        </div>
        <div className="absolute flex justify-center items-center">
          {/* arrow pointing to search of navbar */}
          <img
            src="/landing.png"
            alt="landing"
            className="w-1/6 mb-48 ml-96 -rotate-12 animate-pulse"
          />

          <div className="absolute -bottom-16">
            Made with ❤️ by{" "}
            <a href="https://github.com/sy425191">Saurabh Yadav</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyLanding;
