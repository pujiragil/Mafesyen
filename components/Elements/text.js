import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils";

const text = cva(["font-light", "text-black"], {
  variants: {
    intent: {
      "hero-card": "font-roboto text-xs md:text-2xl",
      "product-card": "font-oswald text-xs md:text-lg",
      blog: "font-roboto text-xs md:text-base",
      "product-detail": "font-roboto text-xs font-normal md:text-sm",
      price: "font-oswald text-sm font-medium font-medium md:text-[22px]",
    },
  },
});

const Text = ({ value, intent, className }) => {
  return <p className={cn(text({ intent, className }))}>{value}</p>;
};

export default Text;
