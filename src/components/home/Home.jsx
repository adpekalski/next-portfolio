'use client'

import React from 'react';
import Image from 'next/image';
import avatar from '$/avatar.png';
import logo from '$/logo_ww.png';
import './home.css';

import { motion, useAnimate } from 'framer-motion';

import { second } from '@/app/fonts';

import { GitHub, Linkedin, Mail } from 'react-feather';

// on tabing to another part it should tab to the whole
// hide other tab indexes from next slide or tab to whole slide

const Home = () => {

    // const homeRef = React.useRef(null);
    // const whichCircle = device === "desktop" ? "circle-desktop" : "circle-mobile";


    // const [scope, animate] = useAnimate();

    const colorLoop = ["#014c0f", "#02a522", "#55fc75"];
    const shadowLoop = ["#0e2b27", "#123833", "#1a4e47"];

    const transitionOptions = {
        ease: "easeInOut",
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
    }

    // React.useEffect(() => {

    //     const showAnimation = async () => {
    //         await animate(
    //             ".home--circle",
    //             { opacity: [1, 0, 1] },
    //             { duration: 1 },
    //         )
    //     }

    //     showAnimation();
    // }, []);



    // React.useEffect(() => {
    //     homeRef.current.style.setProperty('--_user_width', usedSize + 'px');
    // })

    return (
        <motion.section
            // ref={scope}
            className={second.className + ' home'}
            id='home'
            // whileInView={{
            //     opacity: [1, 0, 1],
            //     transition: {
            //         // times: !!!!!
            //         duration: 1
            //     }
            // }}
            // viewport={{ once: true }}
        >

            <motion.div
                // ref={scope}
                className='home--circle'
                // className={['home--circle', `${whichCircle}`].join(" ")}
                whileInView={{
                    opacity: [0.8, 0.2, 0.9, 0.3, 0.9, 0.4, 1.5, 1],
                    transition: {
                        times: [0.3, 0.33, 0.5, 0.54, 0.60, 0.65, 0.8, 1],
                        duration: 5
                    }
                }}
                animate={{
                    color: shadowLoop,
                    backgroundColor: colorLoop,
                }}
                transition={transitionOptions}
                viewport={{ once: true }}
            >
                <motion.div
                    // ref={homeRef}
                    className='home--poster'
                    animate={{
                        color: shadowLoop,
                    }}
                    transition={transitionOptions}
                >
                    <div className='home--image'>
                        <Image
                            alt='avatar'
                            src={avatar}
                            priority={true}
                        />
                    </div>
                </motion.div>
            </motion.div>

            <div className='top'>
                <motion.div
                    className='top--left'
                    whileInView={{
                        rotate: [0, 360],
                        transition: {
                            duration: 0.9,
                            ease: "anticipate",

                        }
                    }}
                    animate={{
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                    viewport={{ once: true }}
                >
                    <Image
                        className='logo'
                        alt='logo'
                        src={logo}
                    />
                </motion.div>

                <div className='top--right'>
                    <h1>Adrian<br />Pękalski</h1>
                </div>
            </div>

            <div className='bottom'>
                <div className='bottom--left'>
                    <h1>Front-End Developer</h1>
                </div>

                <div className='bottom--right'>
                    <div className='icons'>
                        <a href='https://www.linkedin.com/in/adrian-pękalski-b2a005172/' rel='noreferrer' target='_blank'>
                            <Linkedin className='icon' />
                        </a>
                        <a href='https://github.com/adpekalski' rel='noreferrer' target='_blank'>
                            <GitHub className='icon' />
                        </a>

                        {/* <Mail /> */}
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Home;