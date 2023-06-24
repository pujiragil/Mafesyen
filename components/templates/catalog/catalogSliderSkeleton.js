import SectionLayout from "@/components/Layout/sectionLayout";
import { ProductCardSkeleton } from "@/components/molecules";

const CatalogSliderSkeleton = () => {
  return (
    <SectionLayout>
      <div className="mx-3.5 space-y-4">
        <div className="flex justify-between">
          <div className="h-8 w-36 animate-pulse rounded bg-gray-600"></div>
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded bg-gray-300"></div>
            <div className="h-10 w-10 rounded bg-gray-400"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton className="hidden sm:block" />
          <ProductCardSkeleton className="hidden md:block" />
          <ProductCardSkeleton className="hidden lg:block" />
        </div>
      </div>
    </SectionLayout>
  );
};

export default CatalogSliderSkeleton;
