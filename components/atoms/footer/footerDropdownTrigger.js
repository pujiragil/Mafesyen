import { memo } from "react";
import { cn } from "@/utils/utils";
import { FooterDropdownClose, FooterDropdownOpen } from "@/components/assets";

const FooterDropdownTrigger = ({ open, onOpen, className, children }) => {
  const triggerButton = open ? (
    <FooterDropdownClose className="w-5" />
  ) : (
    <FooterDropdownOpen className="w-5" />
  );

  return (
    <div
      onClick={onOpen}
      className={cn(
        "flex cursor-pointer items-center justify-between",
        className
      )}
    >
      {children}
      {triggerButton}
    </div>
  );
};

export default memo(FooterDropdownTrigger);
