import { dresses } from "../../utils/dress";
import { DetailButton } from "../Global";
import { CatalogSidebar } from "./catalogSidebar";
import ProductCard from "../Card/productCard";

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
              image={<ProductCard.Image />}
              info={<ProductCard.Info />}
              price={<ProductCard.Price />}
            />
          ))}
        </div>
        <DetailButton />
      </div>
    </div>
  );
}
