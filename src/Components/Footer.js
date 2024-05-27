import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <footer>
            <nav>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/about">О нас</NavLink>
            </nav>
        </footer>
    );
}

export default Footer;