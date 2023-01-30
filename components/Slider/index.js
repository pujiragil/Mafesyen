import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderItem from "./sliderItem";

export default function Slider() {
  const pagination = {
    clickable: false,
  };

  return (
    <div className="lg:mx-3.5">
      <Swiper
        pagination={pagination}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mainSlide font-oswald"
      >
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
