import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils";

const button = cva(
  ["font-oswald", "font-medium", "uppercase", "py-2", "md:py-3.5"],
  {
    variants: {
      intent: {
        primary: "border-[1.5px] border-black text-black md:border-2",
      },
      size: {
        base: "text-[10px] md:text-lg",
        lg: "text-sm md:text-lg",
      },
      width: {
        base: "h-8 w-[85px] md:h-14 md:w-40",
        full: "w-full",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "lg",
        className: "h-10 w-[115px] border-2",
      },
      {
        intent: "primary",
        size: "base",
        className: "font-semibold",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "base",
      width: "base",
    },
  }
);

const Button = ({ intent, size, width, className, ...props }) => {
  return (
    <button
      className={cn(button({ intent, size, width, className }))}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
