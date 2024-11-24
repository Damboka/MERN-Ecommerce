
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/ad.jpg" className="w-full" /></SwiperSlide>
        <SwiperSlide><img src="/ad-2.jpg" className="w-full" /></SwiperSlide>
        <SwiperSlide><img src="/ad-3.jpg" className="w-full" /></SwiperSlide>
      </Swiper>
    </>
  );
}
