import React from 'react';

function Nav(props) {
    const {
        navOptions = [],
        currentNav,
        setCurrentNav,
        contactSelected,
        setContactSelected
    } = props;

    return (
            <nav>
                <ul className="row list-unstyled">
                    {navOptions.map((option) => (
                        <li className={`mx-1 col text-dark text-decoration-none badge-light ${
                            currentNav.name === option.name && !contactSelected && 'navActive'
                        }`}
                        key={option.name}
                        >
                            <span onClick={() => {
                                setCurrentNav(option);
                                setContactSelected(false);
                                console.log(currentNav);
                            }}
                            >
                                {option.name}
                            </span>
                        </li>
                    ))}
                    <li className="mx-1 col text-dark text-decoration-none badge-light">
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;