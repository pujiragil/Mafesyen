import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const button = cva(
  "font-oswald font-medium uppercase md:h-14 md:w-40 md:py-3 md:text-lg",
  {
    variants: {
      variant: {
        primary: "border-2 border-black text-black",
        secondary: "border-[1.5px] border-white text-white md:border-2",
      },
      size: {
        base: "w-[85px] py-2 text-xs",
        lg: "w-[115px] py-2.5 text-sm",
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
    <Link className="block" href={href}>
      <button className={cn(button({ variant, size, className }))} {...props}>
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
