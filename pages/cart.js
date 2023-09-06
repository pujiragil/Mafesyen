import BaseLayout from "@/components/Layout/baseLayout";
import { ProductCart } from "@/components/organism";

export default function Cart() {
  return (
    <BaseLayout title="Mafesyen - Cart">
      <div className="container mx-auto max-w-sm sm:max-w-md md:max-w-full lg:max-w-5xl">
        <div className="mx-3.5 grid gap-8 py-3.5 md:grid-cols-[3fr_2fr]">
          <div className="space-y-6">
            <h1 className="border-b border-[#C4C4C4] pb-2.5 font-oswald text-xl font-normal text-black md:text-2xl">
              Shopping Cart
            </h1>

            <div className="grid grid-cols-1 gap-3">
              <ProductCart image="/images/dress/floral-women-sundress-blue-1.webp" />
              <ProductCart image="/images/dress/floral-women-sundress-dark-1.webp" />
              <ProductCart image="/images/dress/floral-women-sundress-purple-1.webp" />
              <ProductCart image="/images/dress/floral-women-sundress-red-1.webp" />
            </div>
          </div>

          <div className="space-y-3.5">
            <div className="space-y-2.5">
              <p className="font-oswald text-sm font-normal text-[#828282]">
                Apply Discount Code
              </p>

              <div className="flex h-10 items-center gap-4 border border-[#C4C4C4] p-1 pl-4 focus-within:ring-1 focus-within:ring-[#C4C4C4]">
                <input
                  className="h-full w-full font-roboto text-xs font-normal text-[#828282] outline-none placeholder:text-[#C4C4C4] placeholder:opacity-100 focus:outline-none"
                  placeholder="Enter discount code"
                />
                <button className="h-full w-24 border-2 border-[#C4C4C4] bg-[#f0f1f2] font-oswald text-xs font-medium uppercase text-[#828282]">
                  apply
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="font-oswald text-sm font-normal text-[#828282]">
                Total Estimate
              </p>

              <div>
                <div className="space-y-4 border-2 border-b-0 border-[#C4C4C4] bg-[#f0f1f2] p-3.5">
                  <div className="space-y-2 border-b border-[#C4C4C4] pb-4">
                    <p className="font-oswald text-sm font-medium text-black">
                      Order summary
                    </p>

                    <div className="space-y-1">
                      <div className="flex justify-between font-oswald text-xs font-medium text-[#828282]">
                        <p>Price Total (4 items)</p>
                        <p>IDR 1.000.000</p>
                      </div>
                      <div className="flex justify-between font-oswald text-xs font-medium text-[#828282]">
                        <p>Order total discount</p>
                        <p>-IDR 100.000</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between font-oswald text-sm font-medium text-black">
                    <p>Order Total</p>
                    <p>IDR 900.000</p>
                  </div>
                </div>
                <button className="h-10 w-full bg-black text-center font-oswald text-xs font-medium uppercase text-white">
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
