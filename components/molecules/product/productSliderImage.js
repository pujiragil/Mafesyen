import { memo } from "react";
import Image from "next/image";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductSliderPagination } from "@/components/molecules";

const ProductSliderImage = ({ thumb, data }) => {
  return (
    <div className="grid grid-cols-1 h-full">
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
              loading="lazy"
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
              alt={image.alt}
              src={`/images/dress/${image.link}`}
              className="aspect-square w-full object-cover object-top md:aspect-auto md:h-full lg:aspect-square"
            />
          </SwiperSlide>
        ))}
        <ProductSliderPagination />
      </Swiper>
    </div>
  );
};

export default memo(ProductSliderImage);
