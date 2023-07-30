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
            "transition-all duration-500 ease-in-out",
            isOpen
              ? "grid-rows-[1fr] border-[#C4C4C4]"
              : "grid-rows-[0fr] border-transparent"
          )}
        >
          <div className="overflow-hidden">
            <div className="divide-y divide-[#C4C4C4]">
              {sizes.map((size) => (
                <p
                  key={size}
                  onClick={() => handleSelectSize(size)}
                  className={cn(
                    "px-2",
                    "h-12",
                    "cursor-pointer",
                    "flex items-center",
                    "font-roboto text-xs uppercase",
                    "hover:bg-[#F0F1F2]"
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
