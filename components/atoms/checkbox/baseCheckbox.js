import { cn } from "@/utils/utils";

const BaseCheckbox = ({ checked, onChecked, children }) => {
  return (
    <div
      onClick={onChecked}
      className="flex w-fit cursor-pointer items-center gap-2"
    >
      <span
        className={cn(
          checked ? "border-none bg-black" : "border border-[#C4C4C4] bg-white",
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

      <p
        className={cn(
          "font-roboto uppercase",
          "text-[10px] md:text-xs lg:text-sm",
          checked ? "text-black" : "text-[#828282]"
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default BaseCheckbox;
