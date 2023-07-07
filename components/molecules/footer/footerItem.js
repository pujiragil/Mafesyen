import { cn } from "@/utils/utils";
import { useDropdown } from "@hooks";
import {
  FooterDropdownTrigger,
  FooterDropdownWrapper,
  FooterSubmenu,
} from "@/components/atoms";

const FooterItem = ({ title, className, children }) => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div className={cn(isOpen && "space-y-3", "py-3")}>
      <FooterDropdownTrigger open={isOpen} onOpen={setIsOpen}>
        <FooterSubmenu>{title}</FooterSubmenu>
      </FooterDropdownTrigger>

      <FooterDropdownWrapper
        open={isOpen}
        className={cn("space-y-2", className)}
      >
        {children}
      </FooterDropdownWrapper>
    </div>
  );
};

export default FooterItem;
