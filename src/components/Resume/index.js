import React from 'react';
import myResume from '../../assets/Resume - Will Bruns.pdf';

function Resume() {
    return (
        <div>
            <h3>Resume</h3>
            <div>
                <p>Download my <a href={myResume} download="Resume - Will Bruns.pdf">resume here</a></p>
            </div>
            <h4>Front-end Skills</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Moment</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Handlebars</li>
            </ul>
            <h4>Back-end Skills</h4>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL - Sequelize</li>
                <li>MongoDB - Mongoose</li>
                <li>IndexedDB</li>
                <li>GraphQL</li>
                <li>REST</li>
                <li>React Router</li>
            </ul>
        </div>
    );
}

export default Resume;