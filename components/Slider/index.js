import { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

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

const SlideWrapper = () => {
  const swiper = useSwiper();
  const [isSlideBegin, setIsSlideBegin] = useState(false);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

  swiper.on("slideChange", (slide) => {
    if (slide.isBeginning) {
      setIsSlideBegin(true);
    } else if (slide.isEnd) {
      setIsSlideEnd(true);
    } else {
      setIsSlideBegin(false);
      setIsSlideEnd(false);
    }
  });

  return (
    <div className="flex gap-6">
      <SlideButtonIcon
        key="prev-button"
        isAllowed={isSlideBegin}
        onSlide={() => swiper.slidePrev()}
        iconLink="/arrow-left.svg"
      />
      <SlideButtonIcon
        key="next-button"
        isAllowed={isSlideEnd}
        onSlide={() => swiper.slideNext()}
        iconLink="/arrow-right.svg"
      />
    </div>
  );
};

const SlideButtonIcon = ({ isAllowed, onSlide, iconLink }) => {
  return (
    <button
      onClick={onSlide}
      className={`${
        isAllowed ? "opacity-40 cursor-default" : "opacity-100"
      } w-10 h-10 bg-black flex items-center justify-center transition-opacity duration-300 ease-in-out`}
    >
      <img
        className="w-2 h-auto object-contain"
        src={iconLink}
        alt="slide-button-icon"
      />
    </button>
  );
};
