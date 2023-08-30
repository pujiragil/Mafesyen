import { cn } from "@/utils/utils";
import { useDropdown } from "@hooks";
import { FooterItemMenu } from "@/components/molecules";
import {
  FooterDropdownTrigger,
  FooterDropdownWrapper,
  FooterSubmenu,
} from "@/components/atoms";

const FooterItem = (props) => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div
      className={cn(
        isOpen && "space-y-3",
        "py-3 lg:p-0",
        "border-b border-[#4F4F4F] md:border-hidden"
      )}
    >
      {/* mobile dropdown trigger */}
      <FooterDropdownTrigger
        className="md:hidden"
        open={isOpen}
        onOpen={setIsOpen}
      >
        <FooterSubmenu>{props.title}</FooterSubmenu>
      </FooterDropdownTrigger>

      {/* mobile dropdown wrapper */}
      <FooterDropdownWrapper
        open={isOpen}
        className={cn("space-y-2 md:hidden", props.className)}
      >
        <FooterItemMenu type={props.type} data={props.data} />
      </FooterDropdownWrapper>

      {/* tablet & desktop */}
      <div className={cn("hidden space-y-2 md:block", props.className)}>
        <FooterSubmenu>{props.title}</FooterSubmenu>
        <FooterItemMenu type={props.type} data={props.data} />
      </div>
    </div>
  );
};

export default FooterItem;
