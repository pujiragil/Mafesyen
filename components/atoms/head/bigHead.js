import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const bigHead = cva("font-oswald uppercase", {
  variants: {
    variant: {
      hero: "text-[2rem] md:text-[3.5rem] lg:text-[4.5rem]",
      "primary-card": "text-2xl md:text-[3rem] lg:text-[4rem]",
      "secondary-card": "text-base md:text-[2rem] lg:text-[2.5rem]",
      banner: "text-base md:text-[1.5rem] lg:text-[2rem]",
    },
    color: {
      black: "text-black",
      white: "text-white",
    },
  },
  compoundVariants: [
    {
      variant: ["banner", "hero", "primary-card", "secondary-card"],
      className: "leading-none",
    },
    {
      variant: ["hero", "primary-card", "secondary-card"],
      className: "font-semibold",
    },
    {
      variant: "banner",
      className: "font-medium",
    },
  ],
  defaultVariants: {
    color: "black",
  },
});

const BigHead = ({ type, variant, color, className, children, ...props }) => {
  return React.createElement(
    type,
    {
      className: cn(bigHead({ variant, color, className })),
      ...props,
    },
    children
  );
};

export default BigHead;
