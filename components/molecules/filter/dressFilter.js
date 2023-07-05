import { memo } from "react";
import { cn } from "@/utils/utils";
import { DressCheckboxItem } from "@/components/molecules";
import { DropdownTrigger, DropdownWrapper } from "@/components/atoms";
import useDropdown from "@/hooks/useDropdown";

const DressFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div className="flex flex-col">
      <div className={cn(isOpen && "space-y-3", "py-3")}>
        <DropdownTrigger open={isOpen} onOpen={setIsOpen}>
          Dress
        </DropdownTrigger>

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
