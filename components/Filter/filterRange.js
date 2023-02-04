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
    </div>
  );
}