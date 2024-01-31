import { Outlet } from "react-router-dom";
import { Navbar } from "./components/index.js";
import SearchContextProvider from "./context/searchTermContext.js";

function App() {
  return (
    <div className="h-screen w-full">
      <div className="w-full h-full text-white bg-slate-900">
        <SearchContextProvider>
          <Navbar />
          <Outlet />
        </SearchContextProvider>
      </div>
    </div>
  );
}

export default App;
