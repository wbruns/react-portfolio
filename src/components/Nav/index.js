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
                <ul className="flex-row">
                    {navOptions.map((option) => (
                        <li className={`mx-1 ${
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
                    <li className="mx-2">
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;