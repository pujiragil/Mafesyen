import { useState } from "react";
import { cn } from "@/utils/utils";
import { BrandFilter } from "@/components/molecules";
import SectionLayout from "@/components/Layout/sectionLayout";

const brands = ["state", "cooper", "bardot", "alfani", "cece", "donna ricco"];

const FilterTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionLayout>
      <div className="m-3.5">
        <div className="w-full border border-black">
          <div className="flex h-10 items-center justify-between bg-black px-3">
            <p className="font-oswald text-sm uppercase text-white">filter</p>
            <svg
              className="w-3 cursor-pointer"
              onClick={() => setIsOpen((prevOpen) => !prevOpen)}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5L5 1L1 5" stroke="white" />
            </svg>
          </div>

          <div
            className={cn(
              "grid",
              "transition-all duration-300 ease-in-out",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <BrandFilter data={brands} />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FilterTab;
