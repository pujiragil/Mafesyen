import { useState } from "react";
import { BrandFilter, DressFilter } from "@/components/molecules";
import SectionLayout from "@/components/Layout/sectionLayout";
import { DropdownWrapper } from "@/components/atoms";

const brands = ["state", "cooper", "bardot", "alfani", "cece", "donna ricco"];
const dresses = ["short", "knee length", "high low", "long", "mid"];

const FilterTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionLayout>
      <div className="m-3.5">
        <div className="w-full border border-black">
          <div
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            className="flex cursor-pointer items-center justify-between bg-black p-3"
          >
            <p className="font-oswald text-sm uppercase text-white">filter</p>
            <svg
              className="w-3 cursor-pointer"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5L5 1L1 5" stroke="white" />
            </svg>
          </div>

          <DropdownWrapper isOpen={isOpen}>
            <BrandFilter data={brands} />
          </DropdownWrapper>

          <DropdownWrapper isOpen={isOpen}>
            <DressFilter data={dresses} />
          </DropdownWrapper>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FilterTab;
