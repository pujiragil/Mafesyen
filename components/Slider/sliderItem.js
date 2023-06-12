import { memo, useEffect, useMemo, useState } from "react";
import { useSwiper } from "swiper/react";
import Button from "../Elements/Button";

const SlideItem = memo(() => {
  return (
    <div className="flex flex-col gap-5 px-3.5 pt-8 pb-20 md:grid md:h-[500px] md:grid-cols-2 md:place-items-center md:gap-0 md:px-10">
      <div className="flex justify-center md:order-2">
        <img
          className="h-auto w-3/4 object-center md:w-full md:w-4/5"
          src="/images/swiper-1.png"
          alt="swiper-model"
        />
      </div>
      <div className="flex flex-col items-center gap-3.5 text-center md:order-1 md:items-start md:text-left">
        <h1 className="w-9/12 font-oswald text-[2rem] font-semibold uppercase leading-9 text-black lg:text-[4.5rem] lg:leading-none">
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
    <div className="absolute bottom-0 left-0 z-10 flex w-full justify-between p-3.5">
      <SlideButtonIcon
        key="prev-button"
        isAllowed={isSlideBegin}
        onSlide={() => swiper.slidePrev()}
        iconLink="/arrow-left.svg"
      />
      <SlidePagination
        totalSlides={swiper.slides}
        activeSlide={swiper.activeIndex}
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
        isAllowed ? "cursor-default opacity-40" : "opacity-100"
      } flex h-10 w-10 items-center justify-center bg-black transition-opacity duration-300 ease-in-out`}
    >
      <img
        className="h-auto w-2 object-contain"
        src={iconLink}
        alt="slide-button-icon"
      />
    </button>
  );
};

SlideItem.displayName = "SlideItem";

const SlidePagination = ({ totalSlides, activeSlide }) => {
  const paginationBullets = useMemo(() =>
    totalSlides?.map((slide, idx) => (
      <span
        key={idx}
        className={`${
          idx === activeSlide
            ? "h-5 w-5 border border-black bg-black"
            : "h-4 w-4 border border-[#828282] bg-transparent"
        } transition-all duration-300 ease-in-out`}
      ></span>
    ))
  );

  return <div className="flex items-center gap-2">{paginationBullets}</div>;
};

export { SlideButtonIcon, SlideWrapper, SlideItem };
