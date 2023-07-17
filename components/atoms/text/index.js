import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

const text = cva("font-light text-black", {
  variants: {
    size: {
      xs: "text-xs",
      "xxs/sm/base": "text-[10px] md:text-sm lg:text-base",
      "xxs/base": "text-[10px] md:text-sm lg:text-base",
      "xs/sm": "text-xs md:text-sm",
      "xs/sm/base": "text-xs md:text-sm lg:text-base",
      "xs/lg": "text-xs md:text-base lg:text-lg",
      "xs/2xl": "text-xs md:text-2xl",
      "sm/2xl": "text-sm md:text-2xl",
    },
    family: {
      oswald: "font-oswald",
      roboto: "font-roboto",
    },
    weight: {
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      700: "font-bold",
    },
    color: {
      black: "text-black",
      white: "text-white",
      gray: "text-[#C4C4C4]",
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

const Text = ({ family, size, color, weight, className, children }) => {
  return (
    <p className={cn(text({ size, family, color, weight, className }))}>
      {children}
    </p>
  );
};

export default Text;
