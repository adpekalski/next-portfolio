import React from 'react';

import { second } from '@/app/fonts';
import './project.css';

import { projectsData } from '@/data/ProjectsData';

import Card from '../card/Card';



const Project = (props) => {
    const { which, usedHeight, device } = props;

    const [hidden, setHidden] = React.useState(false);
    let showMoreOrLess = hidden ? "Go back" : "Read more";

    let currentProject = projectsData.description[which];
    let choosenCard = <Card picture={which}></Card>;
    if (device === "mobile" || usedHeight < 800) {
        currentProject = (
            <>
                {hidden ? projectsData.description[which] + " " : projectsData.shortDescription[which] + " "}

                <span className='expand-text'>{showMoreOrLess}</span>
            </>
        );
        choosenCard = hidden ? null : <Card picture={which}></Card>;

    }
    return (
        <div className='project'>
            <h1
                className={second.className + ' project--name'}
            >
                {projectsData.projectName[which]}
            </h1>
            {choosenCard}
            <p
                className='project--desc'
                onClick={() => {
                    setHidden(prev => !prev);
                }}
            >
                {currentProject}
            </p>
        </div>
    );
};

export default Project;