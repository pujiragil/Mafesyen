import dynamic from "next/dynamic";
import { dresses } from "../../utils/dress";
import { DetailButton } from "../Global";
import { CatalogSidebar } from "./catalogSidebar";
import { ProductCard } from "../organism/card/productCard";

const ProductImage = dynamic(
  () => import("../organism/card/productCard").then((mod) => mod.ProductImage),
  {
    ssr: false,
    loading: () => (
      <p className="w-full bg-red-500 text-black">Loading Image...</p>
    ),
  }
);

const ProductInfo = dynamic(
  () => import("../organism/card/productCard").then((mod) => mod.ProductInfo),
  {
    ssr: false,
    loading: () => (
      <p className="w-full bg-blue-500 text-black">Loading Info...</p>
    ),
  }
);

const ProductPrice = dynamic(
  () => import("../organism/card/productCard").then((mod) => mod.ProductPrice),
  {
    ssr: false,
    loading: () => (
      <p className="w-full bg-green-500 text-black">Loading Price...</p>
    ),
  }
);

export default function Catalog() {
  return (
    <div className="mx-3.5 mb-3.5 gap-x-8 font-oswald lg:mb-8 lg:flex">
      <h3 className="mb-4 text-lg md:text-xl lg:hidden">Shop Some Wear:</h3>
      <div className="hidden w-3/12 lg:block">
        <CatalogSidebar />
      </div>

      <div className="w-full lg:pb-[18px]">
        <div className="mb-[18px] grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:mb-12 lg:gap-6">
          {dresses.map((dress) => (
            <ProductCard
              key={dress.id}
              data={dress}
              image={<ProductImage />}
              info={<ProductInfo />}
              price={<ProductPrice />}
            />
          ))}
        </div>
        <DetailButton />
      </div>
    </div>
  );
}
