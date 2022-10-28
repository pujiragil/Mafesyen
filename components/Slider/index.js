import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "../Global";

export default function Slider() {
  const pagination = {
    clickable: false,
  };

  return (
    <div className="lg:mx-3.5">
      <Swiper
        pagination={pagination}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="min-h-[400px] gap-y-5 pt-8 lg:px-8 pb-20 bg-[url('/images/swiper-bg.png')] bg-no-repeat bg-cover flex flex-col lg:flex-row justify-center items-center text-center">
            <div className="lg:order-2 w-full flex justify-center items-center">
              <img
                className="h-[200px] w-[205px] md:h-[300px] md:w-[305px] lg:w-[450px] lg:h-auto object-cover"
                src="/images/swiper-1.png"
              />
            </div>
            <div className="lg:order-1 gap-y-3.5 flex flex-col items-center text-center">
              <h1 className="w-8/12 text-3xl md:text-4xl lg:text-6xl font-semibold uppercase">
                SUMMER SALE GEt 30% OFF On all dress.
              </h1>
              <Button mainButton={true}>shop now</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[400px] gap-y-5 pt-8 lg:px-8 pb-20 bg-[url('/images/swiper-bg.png')] bg-no-repeat bg-cover flex flex-col lg:flex-row justify-center items-center text-center">
            <div className="lg:order-2 w-full flex justify-center items-center">
              <img
                className="h-[200px] w-[205px] md:h-[300px] md:w-[305px] lg:w-[450px] lg:h-auto object-cover"
                src="/images/swiper-1.png"
              />
            </div>
            <div className="lg:order-1 gap-y-3.5 flex flex-col items-center text-center">
              <h1 className="w-8/12 text-3xl md:text-4xl lg:text-6xl font-semibold uppercase">
                SUMMER SALE GEt 30% OFF On all dress.
              </h1>
              <Button mainButton={true}>shop now</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[400px] gap-y-5 pt-8 lg:px-8 pb-20 bg-[url('/images/swiper-bg.png')] bg-no-repeat bg-cover flex flex-col lg:flex-row justify-center items-center text-center">
            <div className="lg:order-2 w-full flex justify-center items-center">
              <img
                className="h-[200px] w-[205px] md:h-[300px] md:w-[305px] lg:w-[450px] lg:h-auto object-cover"
                src="/images/swiper-1.png"
              />
            </div>
            <div className="lg:order-1 gap-y-3.5 flex flex-col items-center text-center">
              <h1 className="w-8/12 text-3xl md:text-4xl lg:text-6xl font-semibold uppercase">
                SUMMER SALE GEt 30% OFF On all dress.
              </h1>
              <Button mainButton={true}>shop now</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
