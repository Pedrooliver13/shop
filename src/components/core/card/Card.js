// Packages
import React from "react";

// Components
import { CardProgressBar } from "components/core/card/components/CardProgressBar";

export const Card = () => {
  return (
    <div className="col-lg-6">
      <div className="card">
        <img
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          className="card-img-top"
          alt="iPhone 9"
        />
        <div className="card-body">
          <span className="float-end badge text-bg-secondary">smartphones</span>
          <h5 className="card-title">Microsoft Surface Laptop 4</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Apple</h6>
          <CardProgressBar />
          An apple mobile which is nothing like apple
          <div>
            <div
              className="btn-group btn-group-sm float-end"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger" disabled>
                &minus;
              </button>
              <button type="button" className="btn btn-outline-secondary">
                0
              </button>
              <button type="button" className="btn btn-success">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
