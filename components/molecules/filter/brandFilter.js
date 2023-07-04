import { memo, useState } from "react";
import { cn } from "@/utils/utils";
import { BrandCheckboxItem } from "@/components/molecules";
import { DropdownWrapper } from "@/components/atoms";

const BrandFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className={cn(isOpen && "space-y-3", "p-3")}>
        <div
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          className="flex cursor-pointer items-center justify-between"
        >
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

        <DropdownWrapper isOpen={isOpen} className="space-y-2">
          {data.map((brand) => (
            <BrandCheckboxItem key={brand}>{brand}</BrandCheckboxItem>
          ))}
        </DropdownWrapper>
      </div>
    </div>
  );
};

export default memo(BrandFilter);
