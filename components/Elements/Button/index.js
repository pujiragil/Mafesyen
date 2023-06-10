import { cva } from "class-variance-authority";

const button = cva(["font-oswald", "font-medium", "uppercase"], {
  variants: {
    intent: {
      primary: "border-[1.5px] text-black",
    },
    size: {
      base: "text-[10px] md:text-lg",
      lg: "text-sm md:text-lg",
    },
    width: {
      base: "w-[85px] h-8 md:w-44 md:h-14",
      full: "w-full",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "lg",
      className: "w-[115px] h-10",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "base",
  },
});
