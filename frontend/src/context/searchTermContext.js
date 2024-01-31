import { createContext, useState } from "react";
import addressInfo from "../api/account.js";
import { useNavigation } from "react-router-dom";

export const searchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const navigate = useNavigation();

  const [searchType, setSearchType] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    const submitTermLength = searchTerm.length;
    if (submitTermLength === 42) {
      navigate("/address" + searchTerm);
    } else if (submitTermLength === 66) {
      navigate("/txn" + searchTerm);
    } else {
      // Snackbar
    }
  };

  return (
    <searchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        setSearchResult,
        searchType,
        setSearchType,
        searchResult,
        submitHandler,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;
