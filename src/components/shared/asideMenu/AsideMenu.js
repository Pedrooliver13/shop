// Packages
import { useState, useEffect } from "react";

// Components
import { SpinnerLoading } from "components/core";

// Services
import { getAllCategories } from "services/product";

// Utils
import { getURLParams } from "utils/utils";

export const AsideMenu = () => {
  const location = getURLParams("products");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCategories().then((response) => {
      setIsLoading(true);

      if (!response) {
        return;
      }

      setCategories(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="col-sm-4 col-lg-3 col-xl-2">
      <h3>Categories</h3>
      {!isLoading ? (
        <ul className="list-group">
          <li className={`list-group-item ${!location ? "active" : ""}`}>
            <a className="text-decoration-none text-reset" href={`/`}>
              Todas
            </a>
          </li>
          {categories?.map((category) => {
            const isCategoryActive = location === category;

            return (
              <li
                key={category}
                className={`list-group-item ${
                  isCategoryActive ? "active" : ""
                }`}
              >
                <a
                  className="text-decoration-none text-reset"
                  href={`?products=${category}`}
                >
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <SpinnerLoading />
      )}
    </div>
  );
};
