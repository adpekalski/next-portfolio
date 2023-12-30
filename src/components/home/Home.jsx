'use client'

import React from 'react';
import Image from 'next/image';
import avatar from '$/avatar.png';
import './home.css';

import { motion, useAnimate } from 'framer-motion';

import { second } from '@/app/fonts';

import { GitHub, Linkedin, Mail } from 'react-feather';

// on tabing to another part it should tab to the whole
// hide other tab indexes from next slide or tab to whole slide

const Home = () => {

    const homeRef = React.useRef(null);
    const [usedSize, setSize] = React.useState(null);
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
            } else if (ratio > 1.5 && ratio < 2) {
                choosenSize = width * 0.9;
            } else if (ratio <= 1.5 && ratio > 1) {
                // tablet ratio - move image higher
                choosenSize = width * 0.7;
            } else {
                choosenSize = width * 0.5;
            }
            setSize(choosenSize);
        };

        const showAnimation = async () => {
            await animate(
                ".home--circle",
                { opacity: [1, 0, 1] },
                { duration: 1 },
            )
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        showAnimation();
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    React.useEffect(() => {
        homeRef.current.style.setProperty('--_user_width', usedSize + 'px');
    })

    return (
        <section ref={scope} className={second.className + ' home'} id='home'>

            <motion.div
                // ref={scope}
                className='home--circle'
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
                    transition={transitionOptions}>
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
                    <h1>WebWeaverDev</h1>
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