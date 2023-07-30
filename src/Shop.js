// Components
import { Pagination } from "components/core";
import { DefaultLayout } from "components/layout";
import { SectionProducts } from "components/shared";
import { ProductContextProvider } from "hooks/contexts/useProductContext";

export function Shop() {
  return (
    <ProductContextProvider>
      <DefaultLayout>
        <SectionProducts />
      </DefaultLayout>
    </ProductContextProvider>
  );
}
