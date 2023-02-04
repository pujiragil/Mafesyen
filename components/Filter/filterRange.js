import { useState } from "react";

export default function FilterRange() {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => setIsShow((prev) => !prev);

  return (
    <div className="flex flex-col gap-3 pb-4 border-b border-[#F0F2F2] font-oswald">
      <div
        onClick={handleShow}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-xs font-oswald">Brand</p>
        <img src="/min-dark.svg" alt="min-dark" />
      </div>

      <PriceRange />
    </div>
  );
}

function PriceRange() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between font-roboto text-[10px] text-black font-medium">
        <p>0.00 EUR</p>
        <p>250.00 EUR</p>
      </div>
      <input type="range" min="0" max="250" />
    </div>
  )
}