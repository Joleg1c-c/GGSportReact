import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </footer>
    );
}

export default Footer;