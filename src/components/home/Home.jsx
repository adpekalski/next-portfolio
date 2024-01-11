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

const Home = (props) => {
    const { usedSize, device } = props;

    const homeRef = React.useRef(null);
    const whichCircle = device === "desktop" ? "circle-desktop" : "circle-mobile";


    const [scope, animate] = useAnimate();

    const colorLoop = ["#014c0f", "#02a522", "#55fc75"];
    const shadowLoop = ["#0e2b27", "#123833", "#1a4e47"];

    const transitionOptions = {
        ease: "easeInOut",
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
    }

    React.useEffect(() => {

        const showAnimation = async () => {
            await animate(
                ".home--circle",
                { opacity: [1, 0, 1] },
                { duration: 1 },
            )
        }

        showAnimation();
    }, []);



    React.useEffect(() => {
        homeRef.current.style.setProperty('--_user_width', usedSize + 'px');
    })

    return (
        <section ref={scope} className={second.className + ' home'} id='home'>

            <motion.div
                // ref={scope}
                // className='home--circle'
                className={['home--circle', `${whichCircle}`].join(" ")}
                animate={{
                    color: shadowLoop,
                    backgroundColor: colorLoop,
                }}
                transition={transitionOptions}
            >
                <motion.div
                    ref={homeRef}
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
                <div className='top--left'>
                    {/* <h1>WebWeaverDev</h1> */}
                    <Image
                        className='logo'
                        alt='logo'
                        src={logo}
                    />
                </div>

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

        </section>
    );
};

export default Home;