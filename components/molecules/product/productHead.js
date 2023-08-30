import { cn } from "@/utils/utils";
import { ProductTag, ProductTitle } from "@/components/atoms";

const ProductHead = ({ tag, title, className }) => {
  return (
    <div className={cn("space-y-1", className)}>
      <ProductTag>{tag}</ProductTag>
      <ProductTitle>{title}</ProductTitle>
    </div>
  );
};

export default ProductHead;
