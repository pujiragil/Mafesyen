import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Thumbs } from "swiper/modules";

import { cn } from "@/utils/utils";

import { Button, ProductPrice } from "@/components/atoms";
import BaseLayout from "@/components/Layout/baseLayout";
import SectionLayout from "@/components/Layout/sectionLayout";
import {
  ProductHead,
  ProductInputColor,
  ProductInputQuantity,
  ProductInputSize,
} from "@/components/molecules";

import "swiper/css";
import "swiper/css/thumbs";

const productImages = [
  {
    id: "dress-1",
    link: "dress-1.webp",
  },
  {
    id: "dress-2",
    link: "dress-2.webp",
  },
  {
    id: "dress-3",
    link: "dress-3.webp",
  },
  {
    id: "dress-4",
    link: "dress-4.webp",
  },
  {
    id: "dress-5",
    link: "dress-5.webp",
  },
  {
    id: "dress-6",
    link: "dress-6.webp",
  },
  {
    id: "dress-7",
    link: "dress-7.webp",
  },
  {
    id: "dress-8",
    link: "dress-8.webp",
  },
];

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
      <div className="mx-3.5 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
        <ProductSlider />

        <div className="grid place-items-center">
          <div className="grid w-full gap-4 sm:w-2/3 md:w-full">
            <ProductHead
              tag="fendi"
              title="Women Black Checked Fit and Flare Dress"
              className="md:w-4/5"
            />
            <ProductPrice value="90,00 eur" />
            <div className="grid gap-4 sm:grid-cols-2 md:flex lg:flex-col lg:gap-4 md:gap-8">
              <ProductInputColor label="select color" />
              <ProductInputQuantity label="quantity" />
            </div>
            <ProductInputSize label="select size (inches)" />

            <div className="flex gap-3.5 lg:w-2/3">
              <button className="h-12 w-full bg-black font-oswald text-xs md:text-sm font-medium uppercase text-white outline-none">
                buy now
              </button>
              <Button variant="secondary" width="full">add to cart</Button>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="block py-3.5 sm:h-[500px] lg:grid lg:h-[560px] lg:grid-cols-[80px_1fr] lg:gap-4">
      <ThumbsSwiper onSwiper={setThumbsSwiper} />
      <ProductsSwiper thumbs={thumbsSwiper} />
    </div>
  );
};

const ThumbsSwiper = ({ onSwiper }) => {
  return (
    <Swiper
      onSwiper={onSwiper}
      modules={[Thumbs]}
      scrollbar={true}
      direction="vertical"
      slidesPerView="auto"
      spaceBetween={14}
      watchSlidesProgress={true}
      className="thumbs-swiper hidden h-full w-full overflow-hidden lg:flex"
    >
      {productImages.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={`/images/${image.link}`}
            alt="dress"
            className="h-24 w-20 cursor-pointer"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ProductsSwiper = ({ thumbs }) => {
  return (
    <Swiper
      modules={[Thumbs]}
      thumbs={{
        swiper: thumbs && !thumbs.destroyed ? thumbs : null,
      }}
      spaceBetween={16}
      className="relative flex h-full w-full flex-col gap-3.5"
    >
      {productImages.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={`/images/${image.link}`}
            alt="dress"
            className="h-full w-full object-cover object-top"
          />
        </SwiperSlide>
      ))}
      <SwiperPagination />
    </Swiper>
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
