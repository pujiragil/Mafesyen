import BaseLayout from "@/components/Layout/baseLayout";
import SectionLayout from "@/components/Layout/sectionLayout";
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
} from "@/components/molecules";
import { cn } from "@/utils/utils";

import data from "@/utils/data.json";
import { Button } from "@/components/atoms";

export default function Wishlist() {
  return (
    <BaseLayout title="Mafesyen - My Wishlist">
      <SectionLayout>
        <div className="mx-3.5 grid place-items-center py-3.5 md:gap-6 lg:gap-16 lg:py-10">
          <h3 className="hidden font-oswald text-2xl font-normal text-black md:block lg:text-3xl">
            My Wishlist
          </h3>
          <div className="grid w-full max-w-md gap-4 sm:max-w-none md:grid-cols-[1fr_3fr] md:gap-2 lg:grid-cols-[1fr_4fr]">
            <div className="flex h-10 w-full items-center justify-between bg-[#F0F1F2] px-2.5 md:hidden">
              <p className="font-oswald text-xs font-medium uppercase text-black">
                my wishlist
              </p>

              <svg
                className={cn(
                  "w-3 md:w-4",
                  "cursor-pointer",
                  "stroke-black",
                  "rotate-180"
                )}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5L5 1L1 5" />
              </svg>
            </div>

            <Sidebar />

            <div className="grid gap-2.5">
              <p className="font-oswald text-sm font-normal uppercase text-[#828282] md:hidden">
                my wishlist
              </p>

              <ProductWishlist />
            </div>
          </div>
        </div>
      </SectionLayout>
    </BaseLayout>
  );
}

const ProductWishlist = () => {
  const products = data.products;

  return (
    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <div key={product.id} className="space-y-2.5">
          <ProductCard
            data={product}
            image={<ProductImage />}
            info={<ProductInfo />}
            price={<ProductPrice />}
          />

          <Button
            variant="primary"
            width="full"
            className="h-10 text-xs md:h-12 md:text-sm"
          >
            add to cart
          </Button>
        </div>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="hidden space-y-1.5 font-oswald font-normal text-[#828282] md:block">
      <p>Account Dashboard</p>
      <p>Account Information</p>
      <p>Adress Book</p>
      <p>My Orders</p>
      <p className="text-black">My Wishlist</p>
      <p>Newsletter Subscriptions</p>
    </div>
  );
};
