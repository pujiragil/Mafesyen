import { ProductLabel } from "@/components/atoms";

const ProductInputColor = ({ label }) => {
  return (
    <div className="space-y-2">
      <ProductLabel>{label}</ProductLabel>

      <div className="flex items-center gap-4">
        <div className="h-4 w-4">
          <div className="h-full w-full bg-[#24426A]"></div>
        </div>
        <div className="h-6 w-6 border border-black p-1">
          <div className="h-full w-full bg-[#F3ECE2]"></div>
        </div>
        <div className="h-4 w-4">
          <div className="h-full w-full bg-[#666689]"></div>
        </div>
        <div className="h-6 w-6">
          <div className="flex h-full w-full items-center justify-center bg-[#F0F1F2]">
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInputColor;
