// Packages
import { useState, useEffect } from "react";

// Components
import { Card, SpinnerLoading } from "components/core";

// Services
import { getAllProducts } from "services/product";

export const SectionProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllProducts().then((response) => {
      setIsLoading(true);

      if (!response) {
        return;
      }

      setProducts(response.products);
      setIsLoading(false);
    });
  }, []);

  return !isLoading ? (
    <>
      <h3>Products</h3>
      <div className="row gy-3">
        {products.map((product) => (
          <Card key={product.id} />
        ))}
      </div>
    </>
  ) : (
    <SpinnerLoading />
  );
};
