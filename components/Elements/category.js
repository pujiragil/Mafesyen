import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils";

const category = cva("font-oswald font-semibold uppercase text-[#BDBDBD]", {
  variants: {
    intent: {
      sm: "text-[10px] md:text-sm",
      base: "text-[10px] md:text-base",
    },
  },
  defaultVariants: {
    intent: "sm",
  },
});

export default function Category({ text, intent, className }) {
  return <p className={cn(category({ intent, className }))}>{text}</p>;
}
