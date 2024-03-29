import { cn } from "@/utils/utils";
import { useDropdown } from "@hooks";

import {
  BrandFilter,
  ColorFilter,
  DressFilter,
  PriceFilter,
  SizeFilter,
} from "@/components/molecules";
import { DropdownWrapper } from "@/components/atoms";

const brands = ["state", "cooper", "bardot", "alfani", "cece", "donna ricco"];
const dresses = ["short", "knee length", "high low", "long", "mid"];
const colors = [
  "bg-[#292A2D]",
  "bg-[#F3ECE2]",
  "bg-[#24426A]",
  "bg-[#18574A]",
  "bg-[#666689]",
  "bg-[#C2BEB6]",
  "bg-[#AAABA7]",
  "bg-[#971E34]",
  "bg-[#CBA13E]",
  "bg-[#73513C]",
  "bg-[#DAB1B1]",
  "bg-[#2B9FA7]",
];
const sizes = [
  "osfa",
  "w26",
  "w27",
  "w28",
  "w29",
  "w30",
  "w31",
  "w32",
  "w33",
  "w34",
  "w35",
  "w36",
  "w37",
  "w38",
  "w39",
  "w40",
  "w41",
  "w42",
  "w43",
  "w44",
  "w45",
  "w46",
  "w47",
  "w48",
  "w49",
  "w50",
];

const FilterTab = () => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div
      className={cn(
        "w-full",
        "border lg:border-none",
        isOpen ? "border-black" : "border-[#C4C4C4]"
      )}
    >
      {/* dropdown trigger mobile & tab */}
      <div
        onClick={setIsOpen}
        className={cn(
          "p-3",
          "cursor-pointer",
          "flex items-center justify-between",
          "transition-colors duration-300 ease-out",
          isOpen ? "bg-black text-white" : "bg-white text-black",
          "lg:hidden"
        )}
      >
        <p className="font-oswald text-sm uppercase md:text-lg">filter</p>
        <svg
          className={cn(
            "w-3 md:w-4",
            "cursor-pointer",
            "transition-transform duration-300 ease-out",
            isOpen ? "rotate-180 stroke-white" : "rotate-0 stroke-black"
          )}
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5L5 1L1 5" />
        </svg>
      </div>

      {/* filter components */}
      <div
        className={cn(isOpen && "divide-y", "divide-[#F0F1F2]", "px-3 lg:px-0")}
      >
        <DropdownWrapper isOpen={isOpen} className="lg:grid-rows-[1fr]">
          <BrandFilter data={brands} />
        </DropdownWrapper>

        <DropdownWrapper isOpen={isOpen} className="lg:grid-rows-[1fr]">
          <DressFilter data={dresses} />
        </DropdownWrapper>

        <DropdownWrapper isOpen={isOpen} className="lg:grid-rows-[1fr]">
          <SizeFilter data={sizes} />
        </DropdownWrapper>

        <DropdownWrapper isOpen={isOpen} className="lg:grid-rows-[1fr]">
          <ColorFilter data={colors} />
        </DropdownWrapper>

        <DropdownWrapper isOpen={isOpen} className="lg:grid-rows-[1fr]">
          <PriceFilter />
        </DropdownWrapper>

        <DropdownWrapper isOpen={isOpen} className="lg:grid-rows-[1fr]">
          <div className="flex justify-end py-3 lg:py-4">
            <button className="h-8 w-[86px] lg:w-28 lg:h-10 border-2 border-[#C4C4C4] bg-[#F0F2F2] font-oswald text-sm font-medium uppercase text-[#828282]">
              apply
            </button>
          </div>
        </DropdownWrapper>
      </div>
    </div>
  );
};

export default FilterTab;
