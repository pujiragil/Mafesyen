import dynamic from "next/dynamic";
import { dresses } from "@/utils/dress";
import { Button } from "@/components/atoms";
import { CatalogSidebar } from "./catalogSidebar";
import { ProductCard } from "@/components/molecules";
import SectionLayout from "../Layout/sectionLayout";

const ProductImage = dynamic(
  () => import("@/components/molecules").then((mod) => mod.ProductImage),
  {
    ssr: false,
    loading: () => (
      <p className="w-full bg-red-500 text-black">Loading Image...</p>
    ),
  }
);

const ProductInfo = dynamic(
  () => import("@/components/molecules").then((mod) => mod.ProductInfo),
  {
    ssr: false,
    loading: () => (
      <p className="w-full bg-blue-500 text-black">Loading Info...</p>
    ),
  }
);

const ProductPrice = dynamic(
  () => import("@/components/molecules").then((mod) => mod.ProductPrice),
  {
    ssr: false,
    loading: () => (
      <p className="w-full bg-green-500 text-black">Loading Price...</p>
    ),
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
