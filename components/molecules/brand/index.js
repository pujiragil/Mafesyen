import { brands } from "@/utils/brand";
import { BrandImage } from "@/components/atoms";
import SectionLayout from "@/components/Layout/sectionLayout";

const BrandSection = () => {
  return (
    <SectionLayout>
      <div className="relative mx-3.5 grid grid-cols-2 gap-3.5 border-[#C4C4C4] font-oswald sm:grid-cols-3 md:grid-cols-4 lg:my-8 lg:grid-cols-8 lg:border-2 lg:p-4">
        <h1 className="absolute -top-4 right-[40%] hidden w-1/5 bg-white text-center text-xl font-normal uppercase lg:inline-block">
          chose your brand
        </h1>
        {brands?.map((brand) => (
          <BrandImage
            key={brand.id}
            src={brand.link}
            alt={brand.alt}
            width={470}
            height={282}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default BrandSection;
