import { memo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

const ProductSliderThumb = ({ onSlide, data }) => {
  return (
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
            src={`/images/dress/${image.link}`}
            alt={image.alt}
            blurDataURL={image.blurDataUrl}
            placeholder="blur"
            className="h-24 w-20 cursor-pointer object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(ProductSliderThumb);
