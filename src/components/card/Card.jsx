'use client'

import React from 'react';
import Image from 'next/image';
import './card.css';

import { motion } from 'framer-motion';
import { projectsData } from '@/data/WebsiteData';

const Card = (props) => {
    const { whichOne } = props;

    const projectLink = projectsData.linkToProject[whichOne];

    return (
        <motion.div
            className='card'

        >
            {projectLink === "" || projectLink === undefined ?
                <Image
                    className='card-image'
                    alt='portfolio'
                    src={projectsData.projectImg[whichOne]}
                />
                :
                <a href={projectLink} rel='noreferrer' target='_blank'>
                    <Image
                        className='card-image'
                        alt='portfolio'
                        src={projectsData.projectImg[whichOne]}
                    />
                </a>
            }
        </motion.div>
    );
};

export default Card;