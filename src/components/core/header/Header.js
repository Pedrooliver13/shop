// Components
import { SearchForm } from "components/core/header/components/SearchForm";

export const Header = () => {
  return (
    <nav className="navbar bg-dark mb-2" data-bs-theme="dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Shop
        </a>
        <SearchForm />
      </div>
    </nav>
  );
};
