import { cn } from "@/utils/utils";

const Input = ({ id, value, placeholder, className, ...props }) => {
  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      className={cn(
        "px-4",
        "w-full",
        "h-10 md:h-11",
        "outline-none",
        "text-black",
        "focus:border-black",
        "border border-[#C4C4C4]",
        className
      )}
      {...props}
    />
  );
};

export default Input;
