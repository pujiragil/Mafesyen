import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideBackground, SlideItem, SlideWrapper } from "./sliderItem";

import "swiper/css";

export default function Slider() {
  return (
    <div className="lg:mx-3.5">
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        modules={[Autoplay]}
        className="hero-slide overflow-hidden"
      >
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SlideWrapper />
        <SlideBackground />
      </Swiper>
    </div>
  );
}
