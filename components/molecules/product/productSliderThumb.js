import { memo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

const ProductSliderThumb = ({ onSlide, data }) => {
  return (
    <div className="grid grid-cols-1">
      <Swiper
        onSwiper={onSlide}
        modules={[Thumbs]}
        scrollbar={true}
        direction="vertical"
        slidesPerView="auto"
        spaceBetween={14}
        watchSlidesProgress={true}
        className="thumbs-swiper hidden h-full w-full overflow-hidden lg:flex"
      >
        {data.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              width={1920}
              height={1280}
              loading="lazy"
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
              src={`/images/dress/${image.link}`}
              alt={image.alt}
              className="curso r-pointer h-24  w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(ProductSliderThumb);
