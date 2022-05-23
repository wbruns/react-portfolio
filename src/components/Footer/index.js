import React from 'react';

function Footer() {
    return (
        <div className='container-fluid w-100 border-dark border-top'>
            <div className='row align-items-center'>
                <p className='col text-muted'>Built by Will using React</p>
                <a className='col text-muted' target="_blank" rel="noopener noreferrer" href='https://github.com/wbruns'>GitHub</a>
                <a className='col text-muted' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/will-bruns-13783596/'>LinkedIn</a>
            </div>
        </div>
    );
}

export default Footer;