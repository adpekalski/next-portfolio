'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { second } from '@/app/fonts';
import './title.css';

const Title = (props) => {
    const { children, solid } = props;

    const title = Array.from(children);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.01,
                staggerChildren: 0.1
            }
        },
    };

    const letters = {
        hidden: index => ({
            y: index % 2 === 0 ? -20 : 20,
            opacity: 0

        }),
        show: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div
            className='title'
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {

                title.map((char, index) => (
                    solid ?
                        <h1
                            key={index}
                            className={second.className}
                        >
                            {char === " " ? "\u00A0" : char}
                        </h1>
                        :
                        <motion.h1
                            key={index}
                            custom={index}
                            className={second.className}
                            variants={letters}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.h1>
                ))
            }
        </motion.div>
    );
};

export default Title;