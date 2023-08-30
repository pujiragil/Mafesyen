import { memo } from "react";
import { cn } from "@/utils/utils";

const SlideButton = ({ isNotAllowed, onSlide, navIcon }) => {
  return (
    <button
      onClick={onSlide}
      disabled={isNotAllowed}
      className={cn(
        "flex items-center justify-center",
        "h-10 w-10 bg-black md:h-[50px] md:w-[50px]",
        "transition-opacity duration-300 ease-in-out",
        isNotAllowed ? "cursor-default opacity-40" : "opacity-100"
      )}
    >
      {navIcon}
    </button>
  );
};

export default memo(SlideButton);
