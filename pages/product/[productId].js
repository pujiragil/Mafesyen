import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { cn } from "@/utils/utils";

import { ProductPrice } from "@/components/atoms";
import BaseLayout from "@/components/Layout/baseLayout";
import SectionLayout from "@/components/Layout/sectionLayout";
import {
  ProductHead,
  ProductInputColor,
  ProductInputQuantity,
  ProductInputSize,
} from "@/components/molecules";

import "swiper/css";

export default function DetailProduct() {
  const router = useRouter();

  return (
    <BaseLayout title={router.query.productId}>
      <ProductSliderSection />
    </BaseLayout>
  );
}

const ProductSliderSection = () => {
  return (
    <SectionLayout>
      <div className="mx-3.5">
        <ProductSlider />

        <div className="space-y-4">
          <ProductHead
            tag="fendi"
            title="Women Black Checked Fit and Flare Dress"
          />
          <ProductPrice value="90,00 eur" />
          <ProductInputColor label="select color" />
          <ProductInputQuantity label="quantity" />
          <ProductInputSize label="select size (inches)" />

          <div className="flex gap-3.5">
            <button className="h-10 w-full bg-black font-oswald text-xs font-medium uppercase text-white outline-none">
              buy now
            </button>
            <button className="h-10 w-full border-2 border-[#C4C4C4] bg-white font-oswald text-xs font-medium uppercase text-[#3F3F3F] outline-none">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const ProductSlider = () => {
  return (
    <div className="py-3.5">
      <Swiper spaceBetween={16} className="flex flex-col gap-3.5">
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover object-top"
            src="/images/dress-1.webp"
            alt="dress"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover object-top"
            src="/images/dress-2.webp"
            alt="dress"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover object-top"
            src="/images/dress-3.webp"
            alt="dress"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover object-top"
            src="/images/dress-4.webp"
            alt="dress"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover object-top"
            src="/images/dress-5.webp"
            alt="dress"
          />
        </SwiperSlide>

        <SwiperPagination />
      </Swiper>
    </div>
  );
};

const SwiperPagination = () => {
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
    <div className="flex items-center justify-center gap-2">
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
