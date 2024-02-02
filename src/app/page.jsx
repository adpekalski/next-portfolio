'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './globals.css';
import "@/components/ultimate.css";

import { motion } from 'framer-motion';
import { second } from './fonts';

import { warningPage } from '@/data/WebsiteData';

import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Portfolio from '@/components/portfolio/Portfolio';
import Contact from '@/components/contact/Contact';

import Title from '@/components/title/Title';
import Button from '@/components/button/Button';

export default function Page() {

  const [noDisplay, setNoDisplay] = React.useState("display-none");
  const [noWarning, clearWarning] = React.useState(false);

  React.useEffect(() => {
    !noWarning ? setNoDisplay(" ") : null;
    clearWarning(JSON.parse(window.sessionStorage.getItem("warningCleared")));

  }, []);

  const [minHeight, setHeightMatch] = React.useState(false);
  const [minDeviceForMoreText, setDeviceMatchMoreText] = React.useState(false);
  const [minDeviceForSplit, setDeviceMatchSplit] = React.useState(false);

  React.useEffect(() => {
    setHeightMatch(window.matchMedia("(min-height: 900px)").matches);
    // diff size for more text
    let deviceMatchMoreText = window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(min-width: 600px").matches;
    let deviceMatchSplit = window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(min-width: 1280px").matches;
    setDeviceMatchMoreText(deviceMatchMoreText);
    setDeviceMatchSplit(deviceMatchSplit);
  });

  return (
    // cause at the start there was only god
    <div className='god'>
      {
        noWarning ?
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
            <div className='warning-text'>
              <p className='white-text'>{warningPage.warningText[1]}</p>
              <p className='white-text'>{warningPage.warningText[2]}</p>

            </div>
            <motion.p
              className={second.className + ' green-text glitch-text'}
            >
              <motion.span
                aria-hidden={true}
                className='glitch-top'
                animate={{
                  x: [-1, 1],
                  transition: {
                    duration: 0.01,
                    repeatDelay: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "anticipate"
                  }
                }}
              >
                {warningPage.warningText[3]}
              </motion.span>
              <motion.span
                aria-hidden={true}
                className='glitch-middle'
                animate={{
                  x: [1, -1],
                  transition: {
                    duration: 0.15,
                    repeatDelay: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "anticipate"
                  }
                }}
              >
                {warningPage.warningText[3]}
              </motion.span>
              {warningPage.warningText[3]}
              <motion.span
                aria-hidden={true}
                className='glitch-bottom'
                animate={{
                  x: [-1, 1],
                  transition: {
                    duration: 0.05,
                    repeatDelay: 0.7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "anticipate"
                  }
                }}
              >
                {warningPage.warningText[3]}
              </motion.span>
            </motion.p>
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
