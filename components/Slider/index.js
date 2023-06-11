import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { SlideWrapper } from "./sliderItem";

export default function Slider() {
  return (
    <div className="lg:mx-3.5">
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        modules={[Autoplay]}
        className="relative"
      >
        <SwiperSlide>makan bang</SwiperSlide>
        <SwiperSlide>makan bang</SwiperSlide>
        <SwiperSlide>makan bang</SwiperSlide>
        <SlideWrapper />
      </Swiper>
    </div>
  );
}
