import Image from "next/image";
import { brands } from "../../utils/brand";

export default function Brand() {
  return (
    <div className="relative my-3.5 mx-3.5 grid grid-cols-2 gap-3.5 border-[#C4C4C4] font-oswald sm:grid-cols-3 md:grid-cols-4 lg:my-8 lg:grid-cols-8 lg:border-2 lg:p-4">
      <h1 className="absolute -top-4 right-[40%] hidden w-1/5 bg-white text-center text-xl font-normal uppercase lg:inline-block">
        chose your brand
      </h1>
      {brands?.map((brand) => (
        <div
          key={brand.id}
          className="w-full border-2 border-[#C4C4C4] lg:border-none"
        >
          <Image
            width={470}
            height={282}
            src={brand.link}
            alt={brand.alt}
            className="h-16 w-full object-cover md:h-20 lg:h-auto"
          />
        </div>
      ))}
    </div>
  );
}
