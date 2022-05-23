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
        <div className='container-fluid px-0'>
            <header className='row align-items-center justify-content-space-between border-bottom border-dark'>
                <h2 className='col-6 col-md-8 pl-4 h2 text-dark text-decoration-none'>
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
        </div>
    );
}

export default Header;