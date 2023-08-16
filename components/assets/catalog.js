import { cn } from "@/utils/utils";

export const CatalogArrowLeft = ({ className }) => {
  return (
    <svg
      className={cn("h-auto w-2", className)}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.45624 1.40002L1.79956 7.0567L7.45624 12.7134"
        stroke="#828282"
        stroke-width="1.5"
      />
    </svg>
  );
};

export const CatalogArrowRight = ({ className }) => {
  return (
    <svg
      className={cn("h-auto w-2", className)}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.543701 12.6L6.20038 6.9433L0.543703 1.28662"
        stroke="#828282"
        stroke-width="1.5"
      />
    </svg>
  );
};
