import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const button = cva("h-12 font-oswald text-sm font-medium uppercase transition-colors duration-200 ease-in-out", {
  variants: {
    variant: {
      primary: "bg-black text-white active:bg-[#EB5757]",
      secondary:
        "border-[#C4C4C4] bg-white text-[#3F3F3F] active:border-[#828282]",
      more: " border-[#C4C4C4] bg-[#F0F2F2] text-[#828282] active:border-[#828282]",
    },
    width: {
      full: "w-full",
      medium: "w-full md:w-36",
    },
  },
  compoundVariants: [
    {
      variant: ["secondary", "more"],
      className: "border-2",
    },
  ],
  defaultVariants: {
    variant: "primary",
    width: "full",
  },
});

const Button = ({ variant, width, className, children, ...props }) => {
  return (
    <button className={cn(button({ variant, width, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
