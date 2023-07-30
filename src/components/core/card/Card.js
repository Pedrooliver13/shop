// Packages
import React from "react";

// Components
import { CardProgressBar } from "components/core/card/components/CardProgressBar";
import { CardProductsCount } from "components/core/card/components/CardProductsCount";

export const Card = (props) => {
  const { product } = props;

  return (
    <div className="card">
      <img
        src={product?.thumbnail}
        className="card-img-top img-responsive object-fit-contain "
        width="300"
        height="240"
        alt="iPhone 9"
      />
      <div className="mw-100 card-body">
        <span className="float-end badge text-bg-secondary text-capitalize">
          {product?.category}
        </span>
        <h5 className="card-title">{product?.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {product?.brand}
        </h6>
        <CardProgressBar rating={product?.rating} />
        <p className="text-truncate" style={{ maxWidth: 450 }}>
          {product?.description}
        </p>
        <div>
          <CardProductsCount />
        </div>
      </div>
    </div>
  );
};
