import { cn } from "@/utils/utils";
import { useDropdown } from "@/hooks";

import { DropdownTrigger, DropdownWrapper } from "@/components/atoms";
import { SizesCheckbox } from "@/components/molecules";

const SizeFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useDropdown();
  return (
    <div className={cn(isOpen && "space-y-3", "py-3")}>
      <DropdownTrigger open={isOpen} onOpen={setIsOpen}>
        Sizes (Inches)
      </DropdownTrigger>

      <DropdownWrapper isOpen={isOpen}>
        <SizesCheckbox data={data} />
      </DropdownWrapper>
    </div>
  );
};

export default SizeFilter;
