import React, { useState } from 'react';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Shop',
            repoLink: 'https://github.com/MeghanPaul/Shop',
            deployedLink: 'https://peaceful-cove-22084.herokuapp.com/',
            img: 'shop-screen.png'
        },
        {
            name: 'Calorie Counter',
            repoLink: 'https://github.com/MickieBurch/Calorie-counter',
            deployedLink: 'https://mickieburch.github.io/Calorie-counter/',
            img: 'calorie_counter_functionality.png'

        },
        {
            name: 'Note Taker',
            repoLink: 'https://github.com/wbruns/express-note-taker',
            deployedLink: 'https://shrouded-oasis-66135.herokuapp.com/',
            img: 'note-taker.png'
        },
        {
            name: 'Work Day Scheduler',
            repoLink: 'https://github.com/wbruns/work-day-scheduler',
            deployedLink: 'https://wbruns.github.io/work-day-scheduler/',
            img: 'work-day-scheduler.png'
        }
    ]);

    return (
        <section>
            <h2 id='portfolio'>Portfolio</h2>
            {projects.map((project) => {
                
                return (
                    <div key={project.name}>
                        <h3>{project.name}</h3>
                        <img
                            src={require(`../../assets/${project.img}`)}
                            alt={project.name}
                            key={project.name}
                        />
                        <a target="_blank" rel="noopener noreferrer" href={project.repoLink}>GitHub</a>
                        <a target="_blank" rel="noopener noreferrer" href={project.deployedLink}>Deployed site</a>
                    </div>
                );
            })}
        </section>
    );
}

export default Portfolio;