import React from 'react';

import './project.css';

import { projectsData } from '@/data/WebsiteData';
import Title from '../title/Title';
import Card from '../card/Card';

const Project = (props) => {
    const { which, minHeight } = props;

    const [hidden, setHidden] = React.useState(false);
    let showMoreOrLess = hidden ? "Go back" : "Read more";

    let currentProject = projectsData.description[which];
    let choosenCard = <Card whichOne={which}></Card>;
    if (!minHeight) {
        currentProject = (
            <>
                {hidden ? projectsData.description[which] + " " : projectsData.shortDescription[which] + " "}

                <span className='more-text green-text'
                    onClick={() => {
                        setHidden(prev => !prev);
                    }}
                >
                    {showMoreOrLess}
                </span>


            </>
        );
        choosenCard = hidden ? null : <Card whichOne={which}></Card>;
    }
    return (
        <div className='project'>
            <Title>{projectsData.projectName[which]}</Title>
            {choosenCard}
            <p className='project--desc'>
                {currentProject}
            </p>
            {hidden ?
                <p style={{ textAlign: "center" }} className="green-text">More text icoming </p>
                : null
            }
        </div>
    );
};

export default Project;