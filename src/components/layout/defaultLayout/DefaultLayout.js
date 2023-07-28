// Packages
import React from "react";

// Components
import { Header } from "components/core";
import { AsideMenu } from 'components/shared'

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row gy-3">
          <AsideMenu />
          {children}
        </div>
      </main>
    </>
  );
};
