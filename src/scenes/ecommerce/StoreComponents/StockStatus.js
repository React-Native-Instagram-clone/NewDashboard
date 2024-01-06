import React from "react";

const StockStatus = ({ inStock }) => {
  return (
    <h1
      className={`font-bold text-[2.7vh] ${
        inStock ? "text-green-600" : "text-red-500"
      }`}
    >
      {/* this is for availablity and non availaibility */}
      {inStock ? "In Stock" : "Out of Stock"}
    </h1>
  );
};

export default StockStatus;
