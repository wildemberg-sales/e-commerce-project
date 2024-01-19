import styles from "./Banner.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner(){
  return(
    <div className='contrainer'>
<Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide> <Image
        src="/banners/banner1.jpeg"
        width={750}
        height={350}
        alt="banner 1"
    /></SwiperSlide>
          <SwiperSlide> <Image
        src="/banners/banner2.jpg"
        width={750}
        height={350}
        alt="banner 2"
    /></SwiperSlide>
          <SwiperSlide> <Image
        src="/banners/banner3.jpg"
        width={750}
        height={350}
        alt="banner 3"
    /></SwiperSlide>
    </Swiper>
    </div>
  )
}