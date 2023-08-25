import { cn } from "@/utils/utils";

const Label = ({ htmlFor, className, value, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-[#3F3F3F]",
        "after:ml-1",
        "after:font-medium",
        "after:text-[#EB5757]",
        "after:content-['*']",
        className
      )}
      {...props}
    >
      {value}
    </label>
  );
};

export default Label;
