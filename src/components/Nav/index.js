import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li>
                        Portfolio
                    </li>
                    <li className="mx-2">
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li>
                        Resume
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;