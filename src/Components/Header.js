import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"

function Header() {
    return (
        <header>
            <img src={require("./img/logo.jpg")} alt="Company Logo" className="logo"  />
            <nav className='HeaderInfo'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

                <div className='auth'>
                    <NavLink to="/login">Войти</NavLink>
                    <NavLink to="/regis">Регистрация</NavLink>
                </div>
        </header>
    );
}

export default Header;