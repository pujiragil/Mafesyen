import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const button = cva(
  "font-oswald font-medium uppercase md:h-14 md:w-36 md:py-3 md:text-lg",
  {
    variants: {
      variant: {
        primary: "border-2",
        secondary: "border-[1.5px] md:border-2",
      },
      size: {
        base: "w-[85px] py-2 text-xs",
        lg: "w-[115px] py-2.5 text-sm",
      },
      color: {
        black: "border-black text-black",
        white: "border-white text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
      color: "black",
    },
  }
);

const ButtonLink = ({
  variant,
  size,
  color,
  className,
  href,
  children,
  ...props
}) => {
  return (
    <Link className="block w-fit" href={href}>
      <button
        className={cn(button({ variant, size, color, className }))}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
