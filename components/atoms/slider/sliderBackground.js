import { memo } from "react";
import Image from "next/image";

import data from "@/utils/data.json";

const SlideBackground = () => {
  const heroSlider = data.heroSlider;

  return (
    <Image
      fill={true}
      priority={true}
      src={heroSlider.bgImg}
      placeholder="blur"
      blurDataURL={heroSlider.blurDataUrl}
      sizes="100vw"
      alt="swiper-background"
    />
  );
};

export default memo(SlideBackground);
