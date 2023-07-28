// Components
import { DefaultLayout } from "components/layout";
import { SectionProducts } from "components/shared";

export function Shop() {
  return (
    <DefaultLayout>
      <div className="col">
        <SectionProducts />

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
      </div>
    </DefaultLayout>
  );
}
