import { ProductTag, ProductTitle } from "@/components/atoms";

const ProductHead = ({ tag, title }) => {
  return (
    <div className="space-y-1">
      <ProductTag>{tag}</ProductTag>
      <ProductTitle>{title}</ProductTitle>
    </div>
  );
};

export default ProductHead;
