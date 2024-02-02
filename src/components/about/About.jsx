import React from 'react';
import Marquee from 'react-fast-marquee';

import './about.css';
import '@/components/ultimate.css';

import { aboutContent } from '@/data/WebsiteData';
import Button from '../button/Button';
import Title from '../title/Title';

const About = (props) => {
    const { minDeviceForMoreText, minDeviceForSplit } = props;

    return (
        <section className='about' id='about' tabIndex={0}>
            <div className='about-container'>

                <div className='about-center'>

                    <Title>About me</Title>

                    {minDeviceForMoreText ?

                        (minDeviceForSplit ?
                            <div className='two-columns'>
                                <div className='something-about'>
                                    <span className='green-text'>It's truly exciting to have you here. </span>
                                    <p>{aboutContent.aboutText[1]}</p>
                                    <p>{aboutContent.aboutText[2]}</p>
                                    <p>{aboutContent.aboutText[3]}</p>
                                </div>
                                <div className='something-about'>
                                    <p>{aboutContent.aboutText[4]}</p>
                                    <p className='green-text'>{aboutContent.aboutText[5]}</p>
                                    <p>{aboutContent.aboutText[6]}</p>
                                    <p className='green-text'>{aboutContent.aboutText[7]}</p>
                                </div>
                            </div>
                            :
                            <div className='something-about'>
                                <span className='green-text'>It's truly exciting to have you here. </span>
                                <p>{aboutContent.aboutText[1]}</p>
                                <p>{aboutContent.aboutText[2]}</p>
                                <p>{aboutContent.aboutText[3]}</p>
                                <p>{aboutContent.aboutText[4]}</p>
                                <p className='green-text'>{aboutContent.aboutText[5]}</p>
                                <p>{aboutContent.aboutText[6]}</p>
                                <p className='green-text'>{aboutContent.aboutText[7]}</p>
                            </div>
                        )
                        :
                        <div className='something-about'>
                            <p>{aboutContent.shortAboutText[1]}</p>
                            <p>{aboutContent.shortAboutText[2]}</p>
                        </div>
                    }

                    <a
                        className='download-anchor'
                        href='/Pękalski_Adrian_CV.pdf'
                        download
                    >
                        <Button style="primary">
                            Download CV
                        </Button>
                    </a>

                </div>

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

        </section>
    );
};

export default About;