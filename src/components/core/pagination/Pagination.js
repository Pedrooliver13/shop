import React from "react";

export const Pagination = () => {
  return (
    <nav className="mt-4">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            <span>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
