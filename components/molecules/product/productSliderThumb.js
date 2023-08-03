import { memo } from "react";
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
        <SwiperSlide key={image}>
          <img
            src={`/images/dress/${image}`}
            alt="dress"
            data={data}
            className="h-24 w-20 cursor-pointer object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(ProductSliderThumb);
