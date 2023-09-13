import { useCallback, useState } from "react";

const CartQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = useCallback(() => {
    setQuantity((prev) => (prev += 1));
  }, []);

  const handleSubtractQuantity = useCallback(() => {
    setQuantity((prev) => {
      if (prev > 1) {
        return (prev -= 1);
      }

      return prev;
    });
  }, []);

  return (
    <div className="grid h-8 w-24 grid-cols-3 border border-black md:h-10 md:w-full">
      <div
        className="grid cursor-pointer place-items-center"
        onClick={handleSubtractQuantity}
      >
        <svg
          className="h-1 w-2.5"
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="10" height="2" fill="#C4C4C4" />
        </svg>
      </div>

      <p className="place-self-center font-roboto text-xs font-normal">
        {quantity}
      </p>

      <div
        className="grid cursor-pointer place-items-center"
        onClick={handleAddQuantity}
      >
        <svg
          className="h-2.5 w-2.5"
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
  );
};

export default CartQuantity;
