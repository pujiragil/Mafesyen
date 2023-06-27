import { memo } from "react";
import Image from "next/image";

import data from "@/utils/data.json";

const SlideBackground = () => {
  const heroSlider = data.heroSlider;

  return (
    <Image
      width={1410}
      height={601}
      priority={true}
      src={heroSlider.bgImg}
      className="absolute top-0 left-0 z-0 h-[110%] w-full"
      alt="swiper-background"
    />
  );
};

export default memo(SlideBackground);
