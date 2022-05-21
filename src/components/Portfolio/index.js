import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Shop',
            repoLink: 'https://github.com/MeghanPaul/Shop',
            deployedLink: 'https://peaceful-cove-22084.herokuapp.com/',
            img: '../../assets/shop-screen.png'
        },
        {
            name: 'Calorie Counter',
            repoLink: 'https://github.com/MickieBurch/Calorie-counter',
            deployedLink: 'https://mickieburch.github.io/Calorie-counter/',
            img: '../../assets/calorie_counter_functionality.png'

        },
        {
            name: 'Note Taker',
            repoLink: 'https://github.com/wbruns/express-note-taker',
            deployedLink: 'https://shrouded-oasis-66135.herokuapp.com/',
            img: '../../assets/note-taker.png'
        },
        {
            name: 'Work Day Scheduler',
            repoLink: 'https://github.com/wbruns/work-day-scheduler',
            deployedLink: 'https://wbruns.github.io/work-day-scheduler/',
            img: '../../assets/work-day-scheduler.png'
        }
    ]

    return (
        <section>
            <h2 id='portfolio'>Portfolio</h2>
            {projects.map((project) => {
                return(
                    <div key={project.name}>
                        <Project project={project} />
                    </div>
                );
            })}
        </section>
    );
}

export default Portfolio;