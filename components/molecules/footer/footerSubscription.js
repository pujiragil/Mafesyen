import { cn } from "@/utils/utils";
import { FooterSubmenu } from "@/components/atoms";

const FooterSubscription = () => {
  return (
    <div className="space-y-3">
      <FooterSubmenu>join us</FooterSubmenu>

      <div className="space-y-2">
        <p className="font-roboto text-xs font-normal uppercase text-[#C4C4C4]">
          subscribe to our news letters
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className={cn(
            "h-10 w-full",
            "border border-white",
            "bg-transparent",
            "px-4",
            "text-xs text-white",
            "placeholder:text-white focus:outline-none"
          )}
        />

        <input
          type="button"
          value="subscribe!"
          className={cn(
            "h-10 w-full",
            "cursor-pointer",
            "border border-white",
            "bg-white",
            "px-4",
            "font-oswald font-normal",
            "text-sm uppercase text-[#3F3F3F]",
            "placeholder:text-white focus:outline-none"
          )}
        />
      </div>
    </div>
  );
};

export default FooterSubscription;
