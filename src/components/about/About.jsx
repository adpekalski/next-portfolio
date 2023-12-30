import React from 'react';

import './about.css';
import '@/components/ultimate.css';
import { second } from '@/app/fonts';
// import CV from '$/CV.pdf';

const About = () => {

    

    return (
        <section className='about' id='about' tabIndex={0}>
            <div className='about-container'>


                <div className='about-sides'>
                    <i class="devicon-css3-plain"></i>
                </div>

                <div className='about-center'>
                    <h1 className={second.className + ' about-me'}>About me</h1>
                    <p className='something-about'>Some text which is very long as fuck</p>
                    <div className='mobile-icons'>
                        <i class="devicon-css3-plain"></i>
                    </div>
                    <a href='/CV.pdf' download='Pękalski_Adrian_CV.pdf'>
                        <button
                            type='button'
                            className='btn-download primary-btn btn'
                        >
                            Download CV
                        </button>
                    </a>
                </div>



                <div className='about-sides'>

                    <i class="devicon-css3-plain"></i>

                </div>


            </div>


        </section>
    );
};

export default About;