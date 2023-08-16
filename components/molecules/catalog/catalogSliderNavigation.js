import { useState, useCallback, useEffect, useMemo } from "react";
import { useSwiper } from "swiper/react";
import { cn } from "@/utils/utils";
import { CatalogArrowLeft, CatalogArrowRight } from "@/components/assets";

const CatalogSliderNavigation = () => {
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
    <div className="absolute right-2 top-2 flex gap-1">
      <button
        onClick={handlePrevSlide}
        className={cn(
          "h-8 w-8 md:h-10 md:w-10",
          "flex items-center justify-center",
          "border border-[#C4C4C4] md:border-2",
          isBegin ? "opacity-50" : "opacity-100"
        )}
      >
        <CatalogArrowLeft />
      </button>
      <button
        onClick={handleNextSlide}
        className={cn(
          "h-8 w-8 md:h-10 md:w-10",
          "flex items-center justify-center",
          "border border-[#C4C4C4] md:border-2",
          isEnd ? "opacity-50" : "opacity-100"
        )}
      >
        <CatalogArrowRight />
      </button>
    </div>
  );
};

export default CatalogSliderNavigation;
