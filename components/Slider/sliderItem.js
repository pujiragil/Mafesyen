import Image from "next/image";
import { memo, useEffect, useMemo, useState } from "react";
import { useSwiper } from "swiper/react";
import { Button } from "../Elements/";
import { ArrowNavigationLeft, ArrowNavigationRight } from "../Assets/arrow";

const SlideItem = memo(() => {
  return (
    <div className="flex flex-col gap-5 px-3.5 pt-8 pb-20 md:grid md:min-h-[500px] md:grid-cols-2 md:place-items-center md:px-8 lg:px-20">
      <div className="flex justify-center md:order-2 md:justify-end">
        <Image
          width={852}
          height={757}
          priority={true}
          className="h-auto w-3/4 object-center md:w-full md:w-full lg:w-4/5"
          src="/images/swiper-1.webp"
          alt="swiper-model"
        />
      </div>
      <div className="flex flex-col items-center gap-3.5 text-center md:order-1 md:items-start md:gap-8 md:text-left lg:gap-10">
        <h1 className="w-9/12 font-oswald text-[2rem] font-semibold uppercase leading-9 text-black md:w-full md:text-[3.5rem] md:leading-none lg:w-10/12 lg:text-[4.5rem]">
          summer sale get 30% off on all dress.
        </h1>
        <Button intent="primary" size="lg" width="base">
          shop now
        </Button>
      </div>
    </div>
  );
});

const SlideWrapper = () => {
  const swiper = useSwiper();
  const [isSlideBegin, setIsSlideBegin] = useState(true);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

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
        <SlideButtonIcon
          key="prev-button"
          isAllowed={isSlideBegin}
          onSlide={() => swiper.slidePrev()}
          navIcon={
            <ArrowNavigationLeft className="h-auto w-2 object-contain md:w-2.5" />
          }
        />
        <SlidePagination
          totalSlides={swiper.slides}
          activeSlide={swiper.activeIndex}
        />
        <SlideButtonIcon
          key="next-button"
          isAllowed={isSlideEnd}
          onSlide={() => swiper.slideNext()}
          navIcon={
            <ArrowNavigationRight className="h-auto w-2 object-contain md:w-2.5" />
          }
        />
      </div>
    </div>
  );
};

const SlideButtonIcon = ({ isAllowed, onSlide, navIcon }) => {
  return (
    <button
      onClick={onSlide}
      className={`${
        isAllowed ? "cursor-default opacity-40" : "opacity-100"
      } flex h-10 w-10 items-center justify-center bg-black transition-opacity duration-300 ease-in-out md:h-[50px] md:w-[50px]`}
    >
      {navIcon}
    </button>
  );
};

const SlidePagination = ({ totalSlides, activeSlide }) => {
  const paginationBullets = useMemo(() =>
    totalSlides?.map((slide, idx) => (
      <span
        key={idx}
        className={`${
          idx === activeSlide
            ? "h-5 w-5 border border-black bg-black md:h-6 md:w-6"
            : "h-4 w-4 border border-[#828282] bg-transparent md:h-5 md:w-5"
        } transition-all duration-200 ease-in-out`}
      ></span>
    ))
  );

  return (
    <div className="flex h-full items-center gap-2 md:absolute md:left-0">
      {paginationBullets}
    </div>
  );
};

const SlideBackground = () => {
  return (
    <Image
      width={1410}
      height={601}
      priority={true}
      className="absolute top-0 left-0 z-0 h-[110%]"
      src="/images/swiper-bg.webp"
      alt="swiper-background"
    />
  );
};

SlideItem.displayName = "SlideItem";

export { SlideButtonIcon, SlideWrapper, SlideItem, SlideBackground };
