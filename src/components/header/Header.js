import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav className='header-navigation'>
            <img src={logo}></img>
            <div className='navigation'>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Manage Inventor</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;