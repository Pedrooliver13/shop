// Packages
import React from "react";

export const CardProgressBar = ({ rating }) => {
  const ratingProgressBarValue = (rating * 100) / 5;

  return (
    <div className="progress">
      <div
        className="progress-bar bg-warning text-dark text-end"
        style={{ width: `${ratingProgressBarValue}%` }}
      >
        {rating}
      </div>
    </div>
  );
};
