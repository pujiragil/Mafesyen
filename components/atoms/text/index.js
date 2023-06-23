import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

const text = cva("font-light text-black", {
  variants: {
    size: {
      "xxs/base": "text-[10px] md:text-sm lg:text-base",
      "xs/lg": "text-xs md:text-base lg:text-lg",
      "xs/2xl": "text-xs md:text-2xl",
      "sm/2xl": "text-sm md:text-2xl",
    },
    family: {
      oswald: "font-oswald",
      roboto: "font-roboto",
    },
    color: {
      black: "text-black",
      white: "text-white",
    },
  },
  compoundVariants: [
    {
      size: "sm/2xl",
      family: "oswald",
      className: "font-medium",
    },
  ],
});

const Text = ({ family, size, color, className, children }) => {
  return (
    <p className={cn(text({ size, family, color, className }))}>{children}</p>
  );
};

export default Text;
