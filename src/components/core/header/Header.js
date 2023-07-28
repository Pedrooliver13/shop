// Packages
import React from "react";

export const Header = () => {
  return (
    <nav className="navbar bg-dark mb-2" data-bs-theme="dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Shop
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success">Search</button>
        </form>
      </div>
    </nav>
  );
};
