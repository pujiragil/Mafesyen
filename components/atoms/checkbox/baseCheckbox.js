import { cn } from "@/utils/utils";

const BaseCheckbox = ({ checked, onChecked }) => {
  return (
    <span
      onClick={onChecked}
      className={cn(
        checked ? "border-none bg-black" : "border border-[#828282] bg-white",
        "inline-flex items-center justify-center",
        "h-4 w-4",
        "cursor-pointer",
        "transition-colors duration-200 ease-in-out"
      )}
    >
      <svg
        className="h-auto w-3"
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 2.5L3.5 5L7.5 1" stroke="white" />
      </svg>
    </span>
  );
};

export default BaseCheckbox;
