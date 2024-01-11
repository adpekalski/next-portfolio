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

  const [usedHeight, setHeight] = React.useState(null);
  const [usedSize, setSize] = React.useState(null);
  const [device, setDevice] = React.useState(null);

  React.useEffect(() => {

    const handleResize = () => {
      // height = window.innerHeight;
      // width = window.innerWidth;
      let height = window.innerHeight;
      let width = window.innerWidth;
      let choosenSize = null;
      let ratio = height / width;
      console.log(ratio);
      // take all devices here - tablet mostly needed
      // and move it higer in media for tablets
      // if (width < 425) {
      if (ratio >= 2) {
        choosenSize = width;
        setDevice("mobile");
      } else if (ratio > 1.5 && ratio < 2) {
        choosenSize = width * 0.9;
        setDevice("mobile");
      } else if (ratio <= 1.5 && ratio >= 1) {
        // tablet ratio - move image higher
        choosenSize = width * 0.7;
        setDevice("tablet");
      } else {
        choosenSize = width * 0.5;
        setDevice("desktop");
      }
      setHeight(height);
      setSize(choosenSize);
      console.log(device);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <Home usedSize={usedSize} device={device} />
      </SwiperSlide>
      <SwiperSlide>
        <About device={device} />
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio usedHeight={usedHeight} usedSize={usedSize} device={device} />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
    </Swiper>
    // </>
  );
}
