import React, { useState } from "react";
import { ProductLabel } from "@/components/atoms";

const ProductInputQuantity = ({ label }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="space-y-2 sm:place-self-end md:place-self-auto">
      <ProductLabel>{label}</ProductLabel>

      <div className="grid h-12 w-[150px] grid-cols-3 border border-[#C4C4C4]">
        <div
          className="grid cursor-pointer place-items-center"
          onClick={handleDecrement}
        >
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="2" fill="#C4C4C4" />
          </svg>
        </div>

        <p className="place-self-center font-oswald text-base font-normal">
          {quantity}
        </p>

        <div
          className="grid cursor-pointer place-items-center"
          onClick={handleIncrement}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="5" width="12" height="2" fill="#C4C4C4" />
            <rect
              x="7"
              width="12"
              height="2"
              transform="rotate(90 7 0)"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductInputQuantity;
