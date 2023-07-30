// Packages
import { createContext, useContext, useState } from "react";

const ProductContext = createContext({});

const ProductContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [categoryParamsValue, setCategoryParamsValue] = useState("");
  const [searchParamsValue, setSearchParamsValue] = useState("");

  const handleChangeCategory = (value = "") => {
    setCategoryParamsValue(value);
    setSearchParamsValue("");
    resetPagination();
  };

  const handleChangeSearch = (value = "") => {
    setSearchParamsValue(value);
    setCategoryParamsValue("");
    resetPagination();
  };

  const resetPagination = () => {
    setPage(0);
    setTotalResults(0);
  };

  const resetParams = () => {
    setCategoryParamsValue("");
    setSearchParamsValue("");
  };

  return (
    <ProductContext.Provider
      value={{
        page,
        setPage,
        totalResults,
        setTotalResults,
        searchParamsValue,
        setSearchParamsValue,
        categoryParamsValue,
        setCategoryParamsValue,
        resetParams,
        handleChangeCategory,
        handleChangeSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductContextProvider, useProductContext };
