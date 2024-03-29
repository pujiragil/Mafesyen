import { cn } from "@/utils/utils";
import { memo } from "react";

const FooterDropdownWrapper = ({ open, children, className }) => {
  return (
    <div
      className={cn(
        "grid",
        "transition-all duration-300 ease-out",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className={cn("overflow-hidden", className)}>{children}</div>
    </div>
  );
};

export default memo(FooterDropdownWrapper);
