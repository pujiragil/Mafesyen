import { cn } from "@/utils/utils";

const DropdownWrapper = ({ isOpen, children, className }) => {
  return (
    <div
      className={cn(
        "grid",
        "transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className={cn("overflow-hidden", className)}>{children}</div>
    </div>
  );
};

export default DropdownWrapper;
