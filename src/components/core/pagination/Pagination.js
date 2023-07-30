// Packages
import React from "react";

// Hooks
import { usePagination } from "hooks/usePagination";
import { useProductContext } from "hooks/contexts/useProductContext";

export const Pagination = () => {
  const { page, setPage, totalResults } = useProductContext();
  const {
    handleNextPage,
    handlePrevPage,
    handlePageChange,
    currentPage,
    lastPage,
  } = usePagination(page, setPage, totalResults);

  return (
    <nav className="mt-4">
      <ul className="pagination">
        <li className="page-item">
          <a
            href="#"
            onClick={handlePrevPage}
            className={`page-link cursor-pointer ${
              page < 10 ? "disabled" : ""
            }`}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {currentPage > 2 && (
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => handlePageChange(page - 20)}
            >
              {currentPage - 2}
            </a>
          </li>
        )}

        {currentPage > 1 && (
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => handlePageChange(page - 10)}
            >
              {currentPage - 1}
            </a>
          </li>
        )}

        <li className="page-item active">
          <a className="page-link">{currentPage}</a>
        </li>

        {currentPage < lastPage && (
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => handlePageChange(page + 10)}
            >
              {currentPage + 1}
            </a>
          </li>
        )}

        {currentPage + 1 < lastPage && (
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => handlePageChange(page + 20)}
            >
              {currentPage + 2}
            </a>
          </li>
        )}

        <li className="page-item">
          <a
            className={`page-link ${lastPage <= currentPage ? "disabled" : ""}`}
            href="#"
            onClick={handleNextPage}
          >
            <span>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
