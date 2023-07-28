// Components
import { Pagination } from "components/core";
import { DefaultLayout } from "components/layout";
import { SectionProducts } from "components/shared";

export function Shop() {
  return (
    <DefaultLayout>
      <SectionProducts />
      <Pagination />
    </DefaultLayout>
  );
}
