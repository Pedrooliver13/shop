// Packages
import React from "react";

// Hooks
import { useProductContext } from "hooks/contexts/useProductContext";

export const SearchForm = () => {
  const { handleChangeSearch } = useProductContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.search) {
      return;
    }

    handleChangeSearch(event.target.search.value);
    event.target.search.value = "";
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        id="search"
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success">Search</button>
    </form>
  );
};
