import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const bigHead = cva("font-oswald uppercase text-black", {
  variants: {
    variant: {
      hero: "text-[2rem] md:text-[3.5rem] lg:text-[4.5rem]",
      "primary-card": "text-2xl md:text-[3rem]",
      "secondary-card": "text-base md:text-[2.5rem]",
      banner: "text-sm md:text-[3rem]",
    },
  },
  compoundVariants: [
    {
      variant: ["hero", "primary-card", "secondary-card"],
      className: "font-semibold",
    },
    {
      variant: "banner",
      className: "font-medium",
    },
  ],
});

const BigHead = ({ type, variant, className, children, ...props }) => {
  return React.createElement(
    type,
    {
      className: cn(bigHead({ variant, className })),
      ...props,
    },
    children
  );
};

export default BigHead;
