import { Swiper, SwiperSlide } from "swiper/react";
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
  CatalogSliderNavigation,
} from "@/components/molecules";
import SectionLayout from "@/components/Layout/sectionLayout";

import data from "@/utils/data.json";

import "swiper/css";

const CatalogSliderSection = ({ title }) => {
  const products = data.products;

  return (
    <SectionLayout>
      <div className="relative grid gap-4 p-2">
        <div className="flex h-8 items-center md:h-10">
          <h3 className="font-oswald text-xl font-normal text-black md:text-2xl">
            {title}
          </h3>
        </div>

        <Swiper
          className="static w-full"
          slidesPerView={2}
          spaceBetween={14}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                data={product}
                image={<ProductImage />}
                info={<ProductInfo />}
                price={<ProductPrice />}
              />
            </SwiperSlide>
          ))}
          <CatalogSliderNavigation />
        </Swiper>
      </div>
    </SectionLayout>
  );
};

export default CatalogSliderSection;
