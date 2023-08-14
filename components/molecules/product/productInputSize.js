import { useState } from "react";
import { cn } from "@/utils/utils";
import { ProductLabel, Text } from "@/components/atoms";

const sizes = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"];

const ProductInputSize = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSelectSize = (size) => {
    setSelectedSize(size);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2">
      <ProductLabel>{label}</ProductLabel>

      <div className="relative">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "h-12",
            "px-2.5",
            "md:hidden",
            "cursor-pointer",
            "border border-[#C4C4C4]",
            "flex items-center justify-between"
          )}
        >
          <Text
            weight={400}
            size="xs"
            family="oswald"
            color="black"
            className="uppercase"
          >
            {selectedSize ? selectedSize : "select your size"}
          </Text>

          <svg
            className={cn(isOpen ? "rotate-180" : "rotate-0")}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="black" />
          </svg>
        </div>

        <div
          className={cn(
            "grid",
            "w-full",
            "bg-white",
            "border border-t-0",
            "transition-all duration-500 ease-out",
            "md:grid-rows-[1fr]",
            isOpen
              ? "grid-rows-[1fr] border-[#C4C4C4]"
              : "grid-rows-[0fr] border-transparent"
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-[repeat(auto-fit,_40px)] gap-2 p-2 md:grid-cols-[repeat(auto-fit,_48px)] md:p-0">
              {sizes.map((size) => (
                <p
                  key={size}
                  onClick={() => handleSelectSize(size)}
                  className={cn(
                    "px-2",
                    "border",
                    "cursor-pointer",
                    "h-10 w-10 md:h-12 md:w-12",
                    "flex items-center justify-center",
                    "font-roboto text-xs uppercase md:text-sm",
                    "hover:bg-[#F0F1F2] hover:text-black",
                    selectedSize === size
                      ? "border-black bg-[#F0F1F2] text-black"
                      : "border-[#C4C4C4] text-[#828282]"
                  )}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInputSize;
