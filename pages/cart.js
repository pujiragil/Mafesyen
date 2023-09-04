import BaseLayout from "@/components/Layout/baseLayout";
import { ProductCart } from "@/components/organism";

export default function Cart() {
  return (
    <BaseLayout title="Mafesyen - Cart">
      <div className="container mx-auto">
        <div className="mx-3.5 space-y-6 py-3.5">
          <h1 className="border-b border-[#C4C4C4] pb-2.5 font-oswald text-lg font-normal text-black">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 gap-3">
            <ProductCart image="/images/dress/floral-women-sundress-blue-1.webp"/>
            <ProductCart image="/images/dress/floral-women-sundress-dark-1.webp"/>
            <ProductCart image="/images/dress/floral-women-sundress-purple-1.webp"/>
            <ProductCart image="/images/dress/floral-women-sundress-red-1.webp"/>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}