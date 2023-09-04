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
        "h-12",
        "outline-none",
        "text-black",
        "focus:border-[#828282]",
        "border border-[#C4C4C4]",
        className
      )}
      {...props}
    />
  );
};

export default Input;
