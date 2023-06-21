import { memo } from "react";
import Image from "next/image";

const SlideBackground = () => {
  return (
    <Image
      width={1410}
      height={601}
      priority={true}
      className="absolute top-0 left-0 z-0 h-[110%] w-full"
      src="/images/swiper-bg.webp"
      alt="swiper-background"
    />
  );
};

export default memo(SlideBackground);
