import React, { useEffect } from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        navOptions,
        currentNav,
        setCurrentNav,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = currentNav.name;
    }, [currentNav]);

    return(
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                    Will Bruns
                </a>{' '}
                <span>Full-Stack Web Developer</span>
            </h2>
            <Nav
                navOptions={navOptions}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
        </header>
    );
}

export default Header;