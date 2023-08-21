import { cn } from "@/utils/utils";

const ProductPrice = ({ isDiscount, originalPrice, discountedPrice }) => {
  return (
    <p
      className={cn(
        "font-oswald font-medium",
        "uppercase",
        "text-xl md:text-2xl",
        isDiscount ? "text-[#EB5757]" : "text-black"
      )}
    >
      {isDiscount ? discountedPrice : originalPrice}

      {isDiscount && (
        <span className="ml-3 font-oswald text-sm font-normal uppercase text-[#828282] line-through">
          {originalPrice}
        </span>
      )}
    </p>
  );
};

export default ProductPrice;
