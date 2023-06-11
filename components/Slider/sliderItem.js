import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import Button from "../Elements/Button";

const SlideItem = () => {
  return (
    <div className="min-h-[400px] gap-y-5 pt-8 lg:px-8 pb-20 bg-[url('/images/swiper-bg.png')] bg-no-repeat bg-cover flex flex-col lg:flex-row justify-center items-center text-center">
      <div className="lg:order-2 w-full flex justify-center items-center">
        <img
          className="h-[200px] w-[205px] md:h-[300px] md:w-[305px] lg:w-[450px] lg:h-auto object-cover"
          src="/images/swiper-1.png"
        />
      </div>
      <div className="lg:order-1 space-y-3.5 md:space-y-12">
        <h1 className="w-8/12 text-3xl md:text-4xl lg:text-6xl font-semibold uppercase">
          SUMMER SALE GEt 30% OFF On all dress.
        </h1>
        <Button intent="primary" size="lg">
          shop now
        </Button>
      </div>
    </div>
  );
};

const SlideWrapper = () => {
  const swiper = useSwiper();
  const [isSlideBegin, setIsSlideBegin] = useState(false);
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

export { SlideButtonIcon, SlideWrapper, SlideItem };
