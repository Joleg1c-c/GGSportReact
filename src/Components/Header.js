import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

                <div className='auth'>
                    <NavLink to="/login">Войти</NavLink>
                </div>
        </header>
    );
}

export default Header;