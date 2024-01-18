'use client'

import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { second } from '@/app/fonts';
import './button.css';

// import { projectsData } from '@/data/ProjectsData';

// import test from '../../../public/avatar.png';




const Button = (props) => {
    const {
        children,
        type,
        value,
        style,
        className,
        onClick
    } = props;

    const text = Array.from(children);

    const controls = useAnimationControls();

    const button = {
        // solid: {
        //     opacity: 1
        // },
        // move: {
        //     // opacity: 1.1,
        //     transition: {
        //         delayChildren: 0.01,
        //         staggerChildren: 0.1,
        //         ease: "linear",
        //         duration: 0.1
        //     },

        // }
    }

    const oldLetters = {
        solid: {
            // visibility: "show"
            y: 0
        },
        move: index => ({
            // visibility: "show",
            y: -20,
            transition: {
                delay: index * 0.05
            },
            transitionEnd: {
                y: 0
            }

        })
    }

    const newLetters = {
        solid: {
            // visibility: "hidden",
            y: 20
        },
        move: index => ({
            // visibility: "show",
            y: 0,
            transition: {
                delay: index * 0.05
            },
            transitionEnd: {
                y: 20
            }
        })
    }

    // const onClickFull = () => { 

    // }

    return (
        <motion.button
            className={["btn", "btn-spcl", `${style}-btn`, `${className}`].join(" ")}
            type={type}
            value={value}
            variants={button}
            onClick={() => {
                controls.start("move");
                onClick !== undefined ? onClick() : null;
            }}
            initial="solid"
            animate={controls}
        >
            <div className='flex-letters'>
                {

                    text.map((char, index) => (

                        <motion.span
                            key={index}
                            className={second.className}
                            variants={oldLetters}
                            custom={index}

                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))
                }
            </div>
            {/* <div className='animated-letters'> */}
            <div className='flex-letters'>
                {

                    text.map((char, index) => (

                        <motion.span
                            key={index}
                            className={second.className}
                            variants={newLetters}
                            custom={index}

                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))
                }
            </div>
            {/* </div> */}

        </motion.button>
    );
};

export default Button;