import React from 'react';

function Project({ name, repoLink, deployedLink, img }) {
    console.log(img);
    return (
        <div>
            <h3>{name}</h3>
            <img
                src={img}
                alt={name}
                key={name}
            />
            <a target="_blank" rel="noopener noreferrer" href={repoLink}>GitHub</a>
            <a target="_blank" rel="noopener noreferrer" href={deployedLink}>Deployed site</a>
        </div>
    );
}

export default Project;