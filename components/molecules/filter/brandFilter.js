import { useState } from "react";
import { cn } from "@/utils/utils";
import BrandCheckboxItem from "../checkbox/brandCheckboxItem";

const BrandFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className={`${isOpen ? "space-y-3" : ""} p-3`}>
        <div className="flex items-center justify-between">
          <p className="font-oswald text-sm text-black">Brand</p>
          <svg
            className="w-3 cursor-pointer"
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            width="12"
            height="2"
            viewBox="0 0 12 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="12" height="2" fill="#3F3F3F" />
          </svg>
        </div>

        <div
          className={cn(
            "grid",
            "transition-all duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="space-y-2 overflow-hidden">
            {data.map((brand) => (
              <BrandCheckboxItem key={brand}>{brand}</BrandCheckboxItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
