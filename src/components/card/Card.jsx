'use client'

import React from 'react';
import Image from 'next/image';
import test from '$/avatar.png';
import './card.css';

// import test from '../../../public/avatar.png';


const Card = (props) => {
    const { picture } = props;

    return (
        <div className='card'>
            {/* <img src={test} /> */}
            <Image
                alt='portfolio'
                src={test}
            />

        </div>
    );
};

export default Card;