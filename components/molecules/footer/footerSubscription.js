import { cn } from "@/utils/utils";
import { FooterSubmenu, Text } from "@/components/atoms";

const textType = {
  weight: 300,
  size: "xs",
  color: "gray",
  family: "roboto",
  className: "uppercase",
};

const FooterSubscription = () => {
  return (
    <div className="w-full space-y-3 md:w-1/2 lg:w-full lg:space-y-2">
      <FooterSubmenu>join us</FooterSubmenu>

      <div className="space-y-2">
        <Text {...textType}>subscribe to our news letters</Text>

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
