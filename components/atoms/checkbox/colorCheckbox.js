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
        "h-10 w-10",
        "cursor-pointer",
        "border-2",
        isChecked ? "border-black " : "border-transparent"
      )}
    >
      <span className={cn("block h-full w-full", color)}></span>
    </span>
  );
};

export default ColorCheckbox;
