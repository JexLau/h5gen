import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';


const SwiperCarousel = ({ images }: { images: string[] }) => {
  return (
    <Swiper
      className='w-full h-full'
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={false}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      modules={[Autoplay]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className='w-full h-full'>
          <Image src={image} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
