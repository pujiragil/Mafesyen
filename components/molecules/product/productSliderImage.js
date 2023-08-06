import { memo } from "react";
import Image from "next/image";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductSliderPagination } from "@/components/molecules";

const ProductSliderImage = ({ thumb, data }) => {
  return (
    <Swiper
      modules={[Thumbs]}
      thumbs={{
        swiper: thumb && !thumb.destroyed ? thumb : null,
      }}
      spaceBetween={16}
      className="relative flex h-full w-full flex-col gap-3.5"
    >
      {data.map((image) => (
        <SwiperSlide key={image.id}>
          <Image
            width={1920}
            height={1280}
            src={`/images/dress/${image.link}`}
            alt={image.alt}
            blurDataURL={image.blurDataUrl}
            className="aspect-square w-full object-cover object-top"
          />
        </SwiperSlide>
      ))}
      <ProductSliderPagination />
    </Swiper>
  );
};

export default memo(ProductSliderImage);
