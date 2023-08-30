import { memo } from "react";
import { cn } from "@/utils/utils";
import { DropdownClose, DropdownOpen } from "@/components/assets";

const DropdownTrigger = ({ open, onOpen, className, children }) => {
  return (
    <div
      onClick={onOpen}
      className="flex h-full cursor-pointer items-center justify-between"
    >
      <p
        className={cn(
          "font-oswald",
          "text-sm text-black md:text-lg",
          className
        )}
      >
        {children}
      </p>

      {open ? <DropdownClose /> : <DropdownOpen />}
    </div>
  );
};

export default memo(DropdownTrigger);
