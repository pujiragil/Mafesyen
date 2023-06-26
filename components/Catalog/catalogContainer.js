import dynamic from "next/dynamic";
import { dresses } from "@/utils/dress";
import { Button } from "@/components/atoms";
import { CatalogSidebar } from "./catalogSidebar";
import {
  ProductCardSkeleton,
  ProductImage,
  ProductInfo,
  ProductPrice,
} from "@/components/molecules";
import SectionLayout from "../Layout/sectionLayout";

const ProductCard = dynamic(
  () => import("@/components/molecules").then((mod) => mod.ProductCard),
  {
    ssr: false,
    loading: () => <ProductCardSkeleton />,
  }
);

const CatalogSection = () => {
  return (
    <SectionLayout>
      <div className="mx-3.5 grid-cols-5 gap-x-8 font-oswald lg:mb-8 lg:grid">
        <CatalogSidebar />

        <div className="w-full lg:col-span-4 lg:pb-[18px]">
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

          <div className="flex justify-center">
            <Button variant="secondary" width="medium">
              show more
            </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default CatalogSection;
