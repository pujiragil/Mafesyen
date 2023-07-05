import { cn } from "@/utils/utils";
import { useDropdown } from "@/hooks";

import { BrandFilter, DressFilter, SizeFilter } from "@/components/molecules";
import SectionLayout from "@/components/Layout/sectionLayout";
import { DropdownWrapper } from "@/components/atoms";

const brands = ["state", "cooper", "bardot", "alfani", "cece", "donna ricco"];
const dresses = ["short", "knee length", "high low", "long", "mid"];
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
    <SectionLayout>
      <div className="m-3.5">
        <div className="w-full border border-black">
          <div
            onClick={setIsOpen}
            className={cn(
              "p-3",
              "cursor-pointer",
              "bg-black",
              "flex items-center justify-between"
            )}
          >
            <p className="font-oswald text-sm uppercase text-white">filter</p>
            <svg
              className={cn(
                "w-3",
                "cursor-pointer",
                "transition-transform duration-300 ease-out",
                isOpen ? "rotate-180" : "rotate-0"
              )}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5L5 1L1 5" stroke="white" />
            </svg>
          </div>

          <div className="divide-y divide-[#F0F1F2] px-3">
            <DropdownWrapper isOpen={isOpen}>
              <BrandFilter data={brands} />
            </DropdownWrapper>

            <DropdownWrapper isOpen={isOpen}>
              <DressFilter data={dresses} />
            </DropdownWrapper>

            <DropdownWrapper isOpen={isOpen}>
              <SizeFilter data={sizes} />
            </DropdownWrapper>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FilterTab;
