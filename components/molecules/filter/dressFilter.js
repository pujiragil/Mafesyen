import { memo, useState } from "react";
import { cn } from "@/utils/utils";
import { DressCheckboxItem } from "@/components/molecules";
import { DropdownWrapper } from "@/components/atoms";

const DressFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className={cn(isOpen && "space-y-3", "p-3")}>
        <div
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          className="flex cursor-pointer items-center justify-between"
        >
          <p className="font-oswald text-sm text-black">Dress</p>
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
            <DressCheckboxItem key={brand}>{brand}</DressCheckboxItem>
          ))}
        </DropdownWrapper>
      </div>
    </div>
  );
};

export default memo(DressFilter);
