import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';

import './portfolio.css';

import { Play } from 'react-feather';

import { projectsData } from '@/data/WebsiteData';
import Project from '../project/Project';

const Portfolio = (props) => {
    const { minHeight } = props;

    const numberOfProjects = Object.entries(projectsData.projectImg).length;
    const numberOfBullets = numberOfProjects - 1;
    const swiperRef = React.useRef(null);
    const [activeSlide, setActiveSlide] = React.useState(0);
    const slides = [];
    const pagination = [];

    for (let i = 0; i < numberOfProjects; i++) {
        slides.push(
            <SwiperSlide key={"slide" + i}>
                <Project which={i + 1} minHeight={minHeight}>

                </Project>
            </SwiperSlide>
        )
    }

    for (let i = 0; i < numberOfBullets; i++) {
        pagination.push(
            <p
                key={"bullet" + i}
                className={activeSlide === i ? "swipe-active" : "swipe"}
                onClick={() => {
                    swiperRef.current.swiper.slideTo(i);
                }}
            >
                {i}
            </p>
        )
    }

    // Object.entries(projectsData.projectImg).forEach((item, index) => {
    //     pagination.push(
    //         <p
    //             key={"swipe" + index}
    //             className={activeSlide === index ? "swipe-active" : "swipe"}
    //             onClick={() => {
    //                 swiperRef.current.swiper.slideTo(index);
    //             }}
    //         >
    //             {index}
    //         </p>
    //     )
    // })

    return (
        <section className='portfolio' id='portfolio'>

            <motion.div
                className='card-container'
                // initial={{
                //     y: 200
                // }}
                // whileInView={{
                //     y: 0
                // }}
                // transition={{
                //     duration: 5
                // }}
            >
                <Swiper
                    ref={swiperRef}
                    onSlideChange={(swiperCore) => {
                        const { activeIndex } = swiperCore;
                        setActiveSlide(activeIndex);
                    }}

                    // direction={'horizontal'}
                    breakpoints={{
                        540: {
                            slidesPerView: 1,
                            // spaceBetween: 30,
                        },
                        // 768: {
                        //     slidesPerView: 2,
                        // },
                        1200: {
                            slidesPerView: 2,
                            // spaceBetween: 40,
                        },
                    }}
                    // !!! if two rows needed
                    // grid={{
                    //     rows: 2,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className='cardSwiper'
                >
                    {slides}
                </Swiper>
                {
                    numberOfProjects > 2 ?
                        <div className='custom-pagination'>
                            <Play
                                className={activeSlide !== 0 ? "play-green" : "play-white"}
                                onClick={() => {
                                    swiperRef.current.swiper.slidePrev();
                                }}
                            />
                            {pagination}
                            <Play
                                className={(activeSlide + 1) !== numberOfBullets ? "play-green" : "play-white"}
                                onClick={() => {
                                    swiperRef.current.swiper.slideNext();
                                }}
                            />
                        </div>
                        :
                        null
                }
            </motion.div>


        </section>
    );
};

export default Portfolio;