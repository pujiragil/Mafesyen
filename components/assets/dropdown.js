import { cn } from "@/utils/utils";

export const DropdownClose = ({ className }) => (
  <svg
    className={cn("w-3", "cursor-pointer", className)}
    width="12"
    height="2"
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="12" height="2" fill="#3F3F3F" />
  </svg>
);

export const DropdownOpen = ({ className }) => (
  <svg
    className={cn("w-3", "cursor-pointer", className)}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="5" width="12" height="2" fill="#3F3F3F" />
    <rect
      x="7"
      width="12"
      height="2"
      transform="rotate(90 7 0)"
      fill="#3F3F3F"
    />
  </svg>
);
