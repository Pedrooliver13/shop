// Packages
import React, { useState } from "react";

export const CardProductsCount = () => {
  const [count, setCount] = useState(0);
  const isDisabledPrev = count === 0;

  return (
    <div
      className="btn-group btn-group-sm float-end"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button
        type="button"
        className="btn btn-danger"
        disabled={isDisabledPrev}
        onClick={() => setCount((state) => --state)}
      >
        &minus;
      </button>
      <button type="button" className="btn btn-outline-secondary">
        {count}
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setCount((state) => ++state)}
      >
        +
      </button>
    </div>
  );
};
