import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { dresses } from "@/utils/dress";
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
} from "@/components/molecules";

import "swiper/css";
import "swiper/css/navigation";

export default function CatalogSlider({ title }) {
  return (
    <div className="relative mx-3.5 mb-3.5 lg:mb-8">
      <h3 className="mb-4 font-oswald text-lg md:text-xl lg:text-2xl">
        {title}
      </h3>
      <Swiper
        className="catalog"
        modules={[Navigation]}
        navigation={true}
        slidesPerView={2}
        spaceBetween={14}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5, spaceBetween: 24 },
        }}
      >
        {dresses.map((dress) => (
          <SwiperSlide key={dress.id}>
            <ProductCard
              data={dress}
              image={<ProductImage />}
              info={<ProductInfo />}
              price={<ProductPrice />}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
