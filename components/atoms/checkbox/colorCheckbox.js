import { useState } from "react";
import { cn } from "@/utils/utils";

const ColorCheckbox = ({ color }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <span
      onClick={() => setIsChecked((prevCheck) => !prevCheck)}
      className={cn(
        "block",
        "p-1",
        "cursor-pointer",
        "border md:border-2",
        isChecked ? "border-black " : "border-transparent"
      )}
    >
      <span className={cn("block h-6 w-6", color)}></span>
    </span>
  );
};

export default ColorCheckbox;
