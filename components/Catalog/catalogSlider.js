import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CatalogItem from "./catalogItem";

import "swiper/css";
import "swiper/css/navigation";

export default function CatalogSlider({ title }) {
  return (
    <div className="mx-3.5 mb-3.5 lg:mb-8 relative">
      <h3 className="text-lg md:text-xl lg:text-2xl mb-4">{title}</h3>
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
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-1.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-2.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-3.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-4.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-5.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-6.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-7.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <CatalogItem imgLink={"/images/dress-8.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
