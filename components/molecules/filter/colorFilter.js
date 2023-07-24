import { useDropdown } from "@hooks";
import { cn } from "@/utils/utils";
import { ColorsCheckbox } from "@/components/molecules";
import { DropdownTrigger, DropdownWrapper } from "@/components/atoms";

const ColorFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useDropdown();
  return (
    <div className={cn(isOpen && "space-y-3", "py-3 lg:py-4")}>
      <DropdownTrigger open={isOpen} onOpen={setIsOpen}>
        Colors
      </DropdownTrigger>

      <DropdownWrapper isOpen={isOpen}>
        <ColorsCheckbox data={data} />
      </DropdownWrapper>
    </div>
  );
};

export default ColorFilter;
