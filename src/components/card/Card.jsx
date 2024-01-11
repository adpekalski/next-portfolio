'use client'

import React from 'react';
import Image from 'next/image';
import test from '$/avatar.png';
import './card.css';

import { projectsData } from '@/data/ProjectsData';

// import test from '../../../public/avatar.png';


const Card = (props) => {
    const { picture } = props;

    return (
        <div className='card'>
            {/* <img src={test} /> */}
            <Image
                className='card-image'
                alt='portfolio'
                src={projectsData.projectImg[picture]}
            />

        </div>
    );
};

export default Card;