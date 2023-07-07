import { FooterDropdownClose, FooterDropdownOpen } from "@/components/assets";
import { memo } from "react";

const FooterDropdownTrigger = ({ open, onOpen, children }) => {
  const triggerButton = open ? (
    <FooterDropdownClose className="w-5" />
  ) : (
    <FooterDropdownOpen className="w-5" />
  );

  return (
    <div
      onClick={onOpen}
      className="flex cursor-pointer items-center justify-between"
    >
      {children}
      {triggerButton}
    </div>
  );
};

export default memo(FooterDropdownTrigger);
