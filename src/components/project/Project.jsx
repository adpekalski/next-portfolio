import React from 'react';

import { second } from '@/app/fonts';
import './project.css';

import { projectsData } from '@/data/ProjectsData';

import Card from '../card/Card';

const Project = (props) => {
    const { which } = props;

    const [hidden, setHidden] = React.useState(false);
    let isHidden = hidden ? "display-none" : " ";

    let currentProject = projectsData.description[which];
    return (
        <div className='project'>
            <h1 className={second.className + ' project--name'}>Project X</h1>
            {hidden ? null : <Card></Card>}
            <p
                className='project--desc'
                onClick={() => {
                    setHidden(prev => !prev)
                    console.log(hidden);
                }}
            >
                {currentProject}

                {/* This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun
                This project is fun */}
            </p>
            {/* <p className='swipe'>swipe</p> */}
        </div>
    );
};

export default Project;