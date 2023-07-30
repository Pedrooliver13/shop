// Products
import { useEffect, useState } from "react";

// Services
import { getProducts, getProductsByCategories } from "services/product";

// Hooks
import { useProductContext } from "hooks/contexts/useProductContext";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryParamsValue, searchParamsValue, page, setTotalResults } =
    useProductContext();

  useEffect(() => {
    if (categoryParamsValue) {
      getProductsByCategories(categoryParamsValue, page)
        .then((response) => {
          setProducts(response.products);
          setTotalResults(response.total);
        })
        .finally(() => setIsLoading(false));

      return;
    }

    getProducts(searchParamsValue, page)
      .then((response) => {
        setProducts(response.products);
        setTotalResults(response.total);
      })
      .finally(() => setIsLoading(false));
  }, [categoryParamsValue, searchParamsValue, page]);

  return { products, isLoading };
};
