"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000  }}
        speed={1000}
        slidesPerView={1}
        className="custom-swiper"
      >
        <SwiperSlide>
          <Image src="/banner-2.jpg" className="w-full h-auto" alt="" width={10000} height={800} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner.jpg" alt="" className="w-full h-auto" width={10000} height={800}/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
