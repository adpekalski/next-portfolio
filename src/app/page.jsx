'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// import './App.css';
import './globals.css';
import "@/components/ultimate.css";

import { second } from '@/app/fonts';

import { warningPage } from '@/data/WebsiteData';

import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Portfolio from '@/components/portfolio/Portfolio';
import Contact from '@/components/contact/Contact';

import Title from '@/components/title/Title';

import Button from '@/components/button/Button';


export default function Page() {



  const [usedHeight, setHeight] = React.useState(null);
  const [usedSize, setSize] = React.useState(null);
  const [device, setDevice] = React.useState(null);

  const [noDisplay, setNoDisplay] = React.useState("display-none")
  const [isWarning, clearWarning] = React.useState(false);

  // let noDisplay = "display-none";
  React.useEffect(() => {
    !isWarning ? setNoDisplay(" ") : null;
    clearWarning(JSON.parse(window.sessionStorage.getItem("warningCleared")));

  }, [])

  const [minHeight, setHeightMatch] = React.useState(false);
  const [minDeviceForMoreText, setDeviceMatchMoreText] = React.useState(false);
  const [minDeviceForSplit, setDeviceMatchSplit] = React.useState(false);

  React.useEffect(() => {
    setHeightMatch(window.matchMedia("(min-height: 900px)").matches);
    let deviceMatchMoreText = window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(min-width: 600px").matches;
    let deviceMatchSplit = window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(min-width: 1280px").matches;
    setDeviceMatchMoreText(deviceMatchMoreText);
    setDeviceMatchSplit(deviceMatchSplit);
  })

  React.useEffect(() => {

    const handleResize = () => {
      // height = window.innerHeight;
      // width = window.innerWidth;
      let height = window.innerHeight;
      let width = window.innerWidth;
      let choosenSize = null;
      let ratio = height / width;
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
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // cause at the start there was only god
    <div className='god'>
      {
        isWarning ?
          <Swiper
            direction={'vertical'}
            pagination={{ clickable: true }}
            mousewheel={true}
            modules={[Pagination, Mousewheel]}
            className='mainSwiper'
          >

            <SwiperSlide>
              <Home />
            </SwiperSlide>
            <SwiperSlide>
              <About minDeviceForMoreText={minDeviceForMoreText} minDeviceForSplit={minDeviceForSplit} />
            </SwiperSlide>
            <SwiperSlide>
              <Portfolio minHeight={minHeight} />
            </SwiperSlide>
            <SwiperSlide>
              <Contact />
            </SwiperSlide>
          </Swiper>
          :
          <div className={`warning-page ${noDisplay}`}>
            <Title solid={true}>Epilepsy warning</Title>
            <p className='white-text'>{warningPage.warningText[1]}</p>
            <p className='white-text'>{warningPage.warningText[2]}</p>
            <div className='warning-buttons'>
              <Button
                style="secondary"
                onClick={() => history.back()}
              >
                Go Back
              </Button>
              <Button
                style="primary"
                onClick={() => {
                  clearWarning(true);
                  window.sessionStorage.setItem("warningCleared", true);
                }}
              >
                Continue
              </Button>
            </div>
          </div>
      }
    </div>
  );
}
