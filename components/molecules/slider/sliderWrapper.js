import { useCallback, useEffect, useMemo, useState } from "react";
import { useSwiper } from "swiper/react";
import { SlideButton, SlidePagination } from "@/components/atoms";
import { ArrowNavigationLeft, ArrowNavigationRight } from "@/components/assets";

const SliderWrapper = () => {
  const swiper = useSwiper();
  const [isSlideBegin, setIsSlideBegin] = useState(true);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

  const isBegin = useMemo(() => isSlideBegin, [isSlideBegin]);
  const isEnd = useMemo(() => isSlideEnd, [isSlideEnd]);

  const handlePrevSlide = useCallback(() => swiper.slidePrev(), [swiper]);
  const handleNextSlide = useCallback(() => swiper.slideNext(), [swiper]);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsSlideBegin(swiper.isBeginning);
      setIsSlideEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="absolute bottom-0 left-0 z-10 w-full p-3.5 md:pb-0 md:pr-0">
      <div className="relative flex w-full items-center justify-between md:justify-end md:gap-2">
        <SlideButton
          key="prev-button"
          isNotAllowed={isBegin}
          onSlide={handlePrevSlide}
          navIcon={
            <ArrowNavigationLeft className="h-auto w-2 object-contain md:w-2.5" />
          }
        />
        <SlidePagination
          totalSlides={swiper.slides}
          activeSlide={swiper.activeIndex}
        />
        <SlideButton
          key="next-button"
          isNotAllowed={isEnd}
          onSlide={handleNextSlide}
          navIcon={
            <ArrowNavigationRight className="h-auto w-2 object-contain md:w-2.5" />
          }
        />
      </div>
    </div>
  );
};

export default SliderWrapper;
