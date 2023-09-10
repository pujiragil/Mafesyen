import BaseLayout from "@/components/Layout/baseLayout";
import { ProductCart } from "@/components/organism";

export default function Cart() {
  return (
    <BaseLayout title="Mafesyen - Cart">
      <div className="container mx-auto max-w-md sm:max-w-lg lg:max-w-6xl">
        <div className="mx-3.5 grid gap-8 py-3.5 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-6 md:space-y-0">
            <h1 className="border-b border-[#C4C4C4] pb-2.5 font-oswald text-xl font-normal text-black md:text-2xl lg:hidden">
              Shopping Cart
            </h1>

            <div className="grid grid-cols-1 gap-3">
              <div className="hidden grid-cols-[3fr_1fr_58px] lg:grid-cols-[3fr_1fr_1fr_58px] gap-3 border-b border-[#C4C4C4] pb-4 font-oswald font-medium text-[#828282] md:grid">
                <p>Product</p>
                <p className="hidden lg:block">Price</p>
                <p>Quantity</p>
                <p>Actions</p>
              </div>
              <ProductCart image="/images/dress/floral-women-sundress-blue-1.webp" />
              <ProductCart image="/images/dress/floral-women-sundress-dark-1.webp" />
              <ProductCart image="/images/dress/floral-women-sundress-purple-1.webp" />
              <ProductCart image="/images/dress/floral-women-sundress-red-1.webp" />
            </div>
          </div>

          <div className="space-y-3.5">
            <div className="space-y-4">
              <p className="font-oswald text-sm md:text-base font-medium text-[#828282]">
                Apply Discount Code
              </p>

              <div className="flex h-10 items-center gap-4 border border-[#C4C4C4] p-1 pl-4 focus-within:ring-1 focus-within:ring-[#C4C4C4] md:h-12">
                <input
                  className="h-full w-full font-roboto text-xs font-normal text-[#828282] outline-none placeholder:text-[#C4C4C4] placeholder:opacity-100 focus:outline-none md:text-sm"
                  placeholder="Enter discount code"
                />
                <button className="h-full w-24 border-2 border-[#C4C4C4] bg-[#f0f1f2] font-oswald text-xs font-medium uppercase text-[#828282] md:w-28 md:text-sm">
                  apply
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="font-oswald text-sm md:text-base font-medium text-[#828282]">
                Total Estimate
              </p>

              <div>
                <div className="space-y-4 border-2 border-b-0 border-[#C4C4C4] bg-[#f0f1f2] p-3.5">
                  <div className="space-y-2 border-b border-[#C4C4C4] pb-4">
                    <p className="font-oswald text-sm font-medium text-black md:text-lg">
                      Order summary
                    </p>

                    <div className="space-y-1">
                      <div className="flex justify-between font-oswald text-xs font-medium text-[#828282] md:text-sm">
                        <p>Price Total (4 items)</p>
                        <p>IDR 1.000.000</p>
                      </div>
                      <div className="flex justify-between font-oswald text-xs font-medium text-[#828282] md:text-sm">
                        <p>Order total discount</p>
                        <p>-IDR 100.000</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between font-oswald text-sm font-medium text-black md:text-lg">
                    <p>Order Total</p>
                    <p>IDR 900.000</p>
                  </div>
                </div>
                <button className="h-10 w-full bg-black text-center font-oswald text-xs font-medium uppercase text-white md:h-12 md:text-sm">
                  proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
