import { useCallback, useState } from "react";

const ProductCartChecked = () => {
  const [checked, setChecked] = useState(true);

  const handleChecked = useCallback(
    () => setChecked((prevCheck) => !prevCheck),
    []
  );

  return (
    <div
      onClick={handleChecked}
      className="grid h-5 w-full cursor-pointer place-items-center border border-black md:h-6"
    >
      {checked && (
        <svg
          className="h-full w-full"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 14.6L13.25 20L22 11" stroke="black" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};

export default ProductCartChecked;
