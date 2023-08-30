import Image from "next/image";
import { memo } from "react";
import { BigHead, ButtonLink } from "@/components/atoms";
import { cn } from "@/utils/utils";

import data from "@/utils/data.json";

const SliderItem = () => {
  const heroSlider = data.heroSlider;

  return (
    <div
      className={cn(
        "md:min-h-[500px] lg:min-h-[550px]",
        "gap-5 px-3.5 pt-8  pb-20 md:px-8 lg:px-20",
        "flex flex-col md:grid md:grid-cols-2 md:place-items-center"
      )}
    >
      <div className="flex justify-center md:order-2 md:justify-end">
        <Image
          width={852}
          height={757}
          priority={true}
          src={heroSlider.productImageLink}
          className="h-auto w-3/4 object-center md:w-full md:w-full lg:w-4/5"
          alt="swiper-model"
        />
      </div>
      <div className="flex flex-col items-center gap-3.5 text-center md:order-1 md:items-start md:gap-8 md:text-left lg:gap-10">
        <BigHead
          type="h1"
          variant="hero"
          className="w-9/12 leading-9 md:w-full md:leading-none lg:w-10/12"
        >
          {heroSlider.title}
        </BigHead>
        <ButtonLink href="/catalog" variant="primary" size="lg">
          {heroSlider["button-text"]}
        </ButtonLink>
      </div>
    </div>
  );
};

export default memo(SliderItem);
