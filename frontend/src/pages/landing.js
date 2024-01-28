import { useState } from "react";
import { AddressScreen, EmptyLanding, Navbar } from "../components";
import { addressInfo } from "../api";

const LandingPage = () => {
  const [searchType, setSearchType] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    const submitTermLength = searchTerm.length;
    if (submitTermLength === 42) {
      setSearchType("address");
      addressInfo(searchTerm)
        .then((data) => {
          setSearchResult(data);
        })
        .catch((err) => console.log(err));
    } else if (submitTermLength === 66) {
      setSearchType("transaction");
      setSearchResult(searchTerm);
    } else {
      // Snackbar
    }
  };

  return (
    <div className="w-full h-full text-white bg-slate-900">
      <Navbar
        submitHandler={submitHandler}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {!searchType ? (
        <EmptyLanding submitHandler={submitHandler} />
      ) : searchType === "address" ? (
        <AddressScreen addressDetails={searchResult} />
      ) : (
        <div>Transaction</div>
      )}
    </div>
  );
};

export default LandingPage;
