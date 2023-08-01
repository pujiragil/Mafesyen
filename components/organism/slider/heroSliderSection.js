import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem, SliderWrapper } from "@/components/molecules";
import { SlideBackground } from "@/components/atoms";

import "swiper/css";
import SectionLayout from "@/components/Layout/sectionLayout";

const HeroSlider = () => {
  return (
    <SectionLayout>
      <div className="lg:mx-3.5">
        <Swiper
          speed={600}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          className="hero-slide overflow-hidden"
        >
          <SwiperSlide>
            <SliderItem />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem />
          </SwiperSlide>
          <SliderWrapper />
          <SlideBackground />
        </Swiper>
      </div>
    </SectionLayout>
  );
};

export default HeroSlider;
