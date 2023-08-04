import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import { cn } from "@/utils/utils";

const ProductSliderPagination = () => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleActiveIndexChange = () => {
      setActiveIndex(swiper.activeIndex);
    };

    swiper.on("activeIndexChange", handleActiveIndexChange);

    return () => {
      swiper.off("activeIndexChange", handleActiveIndexChange);
    };
  }, [swiper]);

  return (
    <div className="flex w-full items-center justify-center gap-2 md:absolute md:bottom-4 md:left-0 md:z-10">
      {swiper.slides.map((slide, idx) => (
        <div
          key={idx}
          className={cn(
            idx === activeIndex ? "h-4 w-4 bg-black" : "h-3 w-3",
            "border border-black"
          )}
        ></div>
      ))}
    </div>
  );
};

export default ProductSliderPagination;
