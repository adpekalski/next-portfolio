import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './portfolio.css';

import Project from '../project/Project';

const Portfolio = () => {
    return (
        <section className='portfolio' id='portfolio'>

            <div className='card-container'>
                <Swiper
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
                    <SwiperSlide>
                        <Project which="first">

                        </Project>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project which="second">

                        </Project>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project which="third">

                        </Project>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project which="first">

                        </Project>
                    </SwiperSlide>
                </Swiper>
                <p className='swipe'>swipe</p>
            </div>


        </section>
    );
};

export default Portfolio;