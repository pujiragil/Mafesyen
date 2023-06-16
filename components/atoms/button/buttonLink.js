import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/utils";

const button = cva(
  "py-2 font-oswald font-medium uppercase md:h-14 md:w-40 md:py-3.5",
  {
    variants: {
      variant: {
        primary: "border-2 border-black text-black",
        secondary: "border-[1.5px] border-white text-white md:border-2",
      },
      size: {
        base: "h-8 w-[85px]",
        lg: "h-10 w-[115px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
);

const ButtonLink = ({ variant, size, className, href, children, ...props }) => {
  return (
    <Link href={href}>
      <button className={cn(button({ variant, size, className }))} {...props}>
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
