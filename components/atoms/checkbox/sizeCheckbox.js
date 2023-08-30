import { useState } from "react";
import { cn } from "@/utils/utils";

const SizeCheckbox = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <span
      onClick={() => setIsChecked((prevCheck) => !prevCheck)}
      className={cn(
        "block",
        "h-10 w-10",
        "uppercase",
        "cursor-pointer",
        "font-oswald",
        "text-[10px] sm:text-xs lg:text-sm",
        "grid place-items-center",
        isChecked
          ? "border-2 border-[#000000] text-black"
          : "border border-[#C4C4C4] text-[#828282]"
      )}
    >
      {children}
    </span>
  );
};

export default SizeCheckbox;
