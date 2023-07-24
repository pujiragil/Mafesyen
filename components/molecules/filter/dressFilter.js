import { memo } from "react";
import { cn } from "@/utils/utils";
import { useDropdown } from "@hooks";
import { DressesCheckbox } from "@/components/molecules";
import { DropdownTrigger, DropdownWrapper } from "@/components/atoms";

const DressFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div className={cn(isOpen && "space-y-3", "py-3 lg:py-4")}>
      <DropdownTrigger open={isOpen} onOpen={setIsOpen}>
        Dress
      </DropdownTrigger>

      <DropdownWrapper isOpen={isOpen}>
        <DressesCheckbox data={data} />
      </DropdownWrapper>
    </div>
  );
};

export default memo(DressFilter);
