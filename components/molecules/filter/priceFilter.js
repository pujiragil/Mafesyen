import { useDropdown } from "@hooks";
import { cn } from "@/utils/utils";
import { PriceRange } from "@/components/molecules";
import { DropdownTrigger, DropdownWrapper } from "@/components/atoms";

const PriceFilter = () => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div className={cn(isOpen && "space-y-3", "py-3 lg:py-4")}>
      <DropdownTrigger open={isOpen} onOpen={setIsOpen}>
        Price Range
      </DropdownTrigger>

      <DropdownWrapper isOpen={isOpen}>
        <PriceRange minRange={0} maxRange={250} />
      </DropdownWrapper>
    </div>
  );
};

export default PriceFilter;
