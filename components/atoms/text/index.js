import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

const text = cva("font-light text-black", {
  variants: {
    size: {
      "xs/lg": "text-xs md:text-lg",
      "xs/2xl": "text-xs md:text-2xl",
      "sm/2xl": "text-sm md:text-2xl",
    },
    family: {
      oswald: "font-oswald",
      roboto: "font-roboto",
    },
  },
  compoundVariants: [
    {
      size: "sm/2xl",
      family: "oswald",
      className: "font-medium"
    }
  ]
});

const Text = ({ family, size, className, children }) => {
  return <p className={cn(text({ size, family, className }))}>{children}</p>;
};

export default Text;
