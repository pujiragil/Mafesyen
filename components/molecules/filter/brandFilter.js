import { memo } from "react";
import { cn } from "@/utils/utils";
import { useDropdown } from "@hooks";
import { BrandCheckboxItem } from "@/components/molecules";
import { DropdownWrapper, DropdownTrigger } from "@/components/atoms";

const BrandFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div className={cn(isOpen && "space-y-3", "py-3")}>
      <DropdownTrigger open={isOpen} onOpen={setIsOpen}>
        Brands
      </DropdownTrigger>

      <DropdownWrapper isOpen={isOpen} className="space-y-2">
        {data.map((brand) => (
          <BrandCheckboxItem key={brand}>{brand}</BrandCheckboxItem>
        ))}
      </DropdownWrapper>
    </div>
  );
};

export default memo(BrandFilter);
