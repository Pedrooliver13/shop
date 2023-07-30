// Components
import { SpinnerLoading } from "components/core";

// Hooks
import { useGetCategories } from "hooks/useGetCategories";
import { useProductContext } from "hooks/contexts/useProductContext";

export const AsideMenu = () => {
  const { categories, isLoading } = useGetCategories();
  const { categoryParamsValue, handleChangeCategory } = useProductContext();

  return (
    <div className="col-sm-4 col-lg-3 col-xl-2">
      <h3>Categories</h3>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <ul className="list-group">
          <li
            onClick={() => handleChangeCategory()}
            style={{ cursor: "pointer" }}
            className={`list-group-item ${
              !categoryParamsValue ? "active" : ""
            }`}
          >
            Todas
          </li>
          {categories?.map((category) => {
            const isCategoryActive = categoryParamsValue === category;

            return (
              <li
                key={category}
                onClick={() => handleChangeCategory(category)}
                style={{ cursor: "pointer" }}
                className={`list-group-item text-capitalize ${
                  isCategoryActive ? "active" : ""
                }`}
              >
                {category}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
