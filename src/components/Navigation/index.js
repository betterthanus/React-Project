import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="black">
            <ul>
                <li className="turquoise">
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li className="turquoise">
                    <NavLink to="/characters">Characters</NavLink>
                </li>
                <li className="turquoise">
                    <NavLink to="/locations">Locations</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;