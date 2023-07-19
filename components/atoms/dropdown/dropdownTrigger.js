import { memo } from "react";
import { DropdownClose, DropdownOpen } from "@/components/assets";

const DropdownTrigger = ({ open, onOpen, children }) => {
  return (
    <div
      onClick={onOpen}
      className="flex h-full cursor-pointer items-center justify-between"
    >
      <p className="font-oswald text-sm text-black md:text-lg lg:text-xl">
        {children}
      </p>
      
      {open ? <DropdownClose /> : <DropdownOpen />}
    </div>
  );
};

export default memo(DropdownTrigger);
