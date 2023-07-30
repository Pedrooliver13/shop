// Components
import { Card, Pagination, SpinnerLoading } from "components/core";

// Hooks
import { useGetProducts } from "hooks/useGetProducts";

export const SectionProducts = () => {
  const { products, isLoading } = useGetProducts();

  return (
    <>
      <h3>Products</h3>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <>
          <div className="row gy-3">
            {products?.map((product) => (
              <div className="col-lg-6" key={product?.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
          <Pagination />
        </>
      )}
    </>
  );
};
