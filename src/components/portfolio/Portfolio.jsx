import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { motion, useAnimationControls } from 'framer-motion';

import './portfolio.css';

import { Play } from 'react-feather';

import { projectsData } from '@/data/WebsiteData';
import Project from '../project/Project';

const Portfolio = (props) => {
    const { minHeight } = props;

    const numberOfProjects = Object.entries(projectsData.projectImg).length;
    const [numberOfBullets, setNumberOfBullets] = React.useState(0);

    const swiperRef = React.useRef(null);
    const [activeSlide, setActiveSlide] = React.useState(0);

    const slides = [];
    const pagination = [];

    const controls = useAnimationControls();

    const shakeElement = {
        solid: {
            y: 0,
            x: 0
        },
        shake: {
            y: [0, 2, 0, -2, 0],
            x: [0, -2, 0, 2, 0],
            transition: { duration: 0.2 }
        }
    }

    for (let i = 0; i < numberOfProjects; i++) {
        slides.push(
            <SwiperSlide key={"slide" + i}>
                <Project which={i + 1} minHeight={minHeight}>

                </Project>
            </SwiperSlide>
        )
    }

    React.useEffect(() => {
        const bulletsNeeded = swiperRef.current.swiper.pagination.bullets.length;
        setNumberOfBullets(bulletsNeeded);
    })

    for (let i = 0; i < numberOfBullets; i++) {
        pagination.push(
            <p
                key={"bullet" + i}
                className={activeSlide === i ? "swipe-active" : "swipe"}
                onClick={() => {
                    swiperRef.current.swiper.slideToLoop(i);
                    controls.start("shake");
                }}
            >
                {i}
            </p>
        )
    }

    return (
        <section className='portfolio' id='portfolio'>
            <div className='card-container'>
                <Swiper
                    ref={swiperRef}
                    loop={true}
                    onSlideChange={(swiperCore) => {
                        const { realIndex } = swiperCore;
                        setActiveSlide(realIndex);
                    }}
                    breakpoints={{
                        540: { slidesPerView: 1, },
                        1200: { slidesPerView: 2, },
                        1600: { slidesPerView: 3, },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className='cardSwiper'
                >
                    {slides}
                </Swiper>
                {numberOfProjects > 2 ?
                    <motion.div
                        className='custom-pagination'
                        variants={shakeElement}
                        initial="solid"
                        animate={controls}
                    >
                        <Play
                            className='play-white'
                            onClick={() => {
                                swiperRef.current.swiper.slidePrev();
                                controls.start("shake");
                            }}
                        />
                        {pagination}
                        <Play
                            className='play-white'
                            onClick={() => {
                                swiperRef.current.swiper.slideNext();
                                controls.start("shake");
                            }}
                        />
                    </motion.div>
                    :
                    null
                }
            </div>
        </section>
    );
};

export default Portfolio;