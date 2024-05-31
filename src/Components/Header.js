import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"
import Cookies from 'universal-cookie';

function Header() {
    const cookie = new Cookies();
    
    return (
        <header>
            <img src={require("./img/logo.jpg")} alt="Company Logo" className="logo"  />
            <nav className='HeaderInfo'>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/about">О нас</NavLink>
                <NavLink to="/scheduler">Расписание</NavLink>
            </nav>

                <div className='auth'>
                    <NavLink to="/regis">Регистрация</NavLink>
                    
                    {cookie.get("jwt_token") === undefined ? 
                        <NavLink to="/login">Войти</NavLink>
                        : 
                        <NavLink to="/profile">Профиль</NavLink>
                    }
                </div>
        </header>
    );
}

export default Header;