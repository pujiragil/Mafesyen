import { memo } from "react";
import { cn } from "@/utils/utils";
import { useDropdown } from "@hooks";
import { BrandsCheckbox } from "@/components/molecules";
import { DropdownWrapper, DropdownTrigger } from "@/components/atoms";

const BrandFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div className={cn(isOpen && "space-y-3", "py-3 lg:py-4")}>
      <DropdownTrigger open={isOpen} onOpen={setIsOpen}>
        Brands
      </DropdownTrigger>

      <DropdownWrapper isOpen={isOpen}>
        <BrandsCheckbox data={data} />
      </DropdownWrapper>
    </div>
  );
};

export default memo(BrandFilter);
