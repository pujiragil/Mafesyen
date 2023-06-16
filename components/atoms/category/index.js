import { cva } from "class-variance-authority";
import { cn } from "../../../utils/utils";

const category = cva("font-oswald font-semibold uppercase text-[#BDBDBD]", {
  variants: {
    intent: {
      primary: "text-[10px] md:text-sm",
      secondary: "text-[10px] md:text-base",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

const Category = ({ value, intent, className }) => {
  return <p className={cn(category({ intent, className }))}>{value}</p>;
};

export default Category;
