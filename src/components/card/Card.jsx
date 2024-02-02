'use client'

import React from 'react';
import Image from 'next/image';
import './card.css';

import { projectsData } from '@/data/WebsiteData';

const Card = (props) => {
    const { whichOne } = props;

    const projectLink = projectsData.linkToProject[whichOne];

    return (
        <div className='card'>
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
        </div>
    );
};

export default Card;