'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// import './App.css';
import './globals.css';

import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Portfolio from '@/components/portfolio/Portfolio';
import Contact from '@/components/contact/Contact';

export default function Page() {
  return (
    // <>
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mainSwiper'
    >

      <SwiperSlide>
        <Home />
      </SwiperSlide>
      <SwiperSlide>
        <About />
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
    </Swiper>
    // </>
  );
}
