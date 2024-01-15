import React from 'react';

import './about.css';
import '@/components/ultimate.css';
import { second } from '@/app/fonts';
// import CV from '$/CV.pdf';

import { motion } from 'framer-motion';

import Marquee from 'react-fast-marquee';

import { aboutContent } from '@/data/ProjectsData';

const About = (props) => {

    const { device } = props;

    const mobileClass = device === "mobile" ? "" : "display-none";
    const [minHeightMatch, setMatch] = React.useState(false);

    React.useEffect(() => {
        setMatch(window.matchMedia("(min-height: 900px)").matches);
    })

    return (
        <section className='about' id='about' tabIndex={0}>
            <div className='about-container'>

                <div className='about-center'>
                    <h1
                        className={second.className + ' about-me'}
                    >About me
                    </h1>
                    <p
                        className='something-about'
                    >
                        {
                            minHeightMatch ?
                                aboutContent.aboutText[1]
                                : aboutContent.shortAboutText[1]
                        }
                    </p>

                    <a
                        href='/Pękalski_Adrian_CV.pdf'
                        download
                    >
                        <button
                            type='button'
                            className='btn-download primary-btn btn'
                        >
                            Download CV
                        </button>
                    </a>


                </div>
                <div className='about-bottom'>
                    <Marquee
                        className='mobile-icons'
                        speed={50}
                        autoFill
                    >
                        <i className="devicon-css3-plain"></i>
                        <i className="devicon-html5-plain"></i>
                        <i className="devicon-nextjs-original"></i>
                        <i className="devicon-git-plain"></i>
                        <i className="devicon-github-original"></i>
                        <i className="devicon-nodejs-plain"></i>
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-storybook-plain"></i>
                        <i className="devicon-webpack-plain"></i>
                        <i className="devicon-babel-plain"></i>
                        <i className="devicon-typescript-plain"></i>
                        <i className="devicon-bootstrap-plain"></i>
                        <i className="devicon-canva-original"></i>
                        <i className="devicon-figma-plain"></i>
                        <i className="devicon-heroku-original"></i>
                        <i className="devicon-mongodb-plain"></i>
                        <i className="devicon-npm-original-wordmark"></i>
                        <i className="devicon-react-original"></i>
                    </Marquee>
                </div>
            </div>

            <div className='about-bottom-overlay-left'></div>
            <div className='about-bottom-overlay-right'></div>

        </section>
    );
};

export default About;