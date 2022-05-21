import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return(
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                    Will Bruns
                </a>{' '}
                <span>Full-Stack Web Developer</span>
            </h2>
            <Nav
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
        </header>
    );
}

export default Header;