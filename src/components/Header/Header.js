import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <img className = "logo" src={logo} alt="ema-john official logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
            <div className = "search-container">
                <input type="text" placeholder = "Type Here To Search"/>
            </div>
        </div>
    );
};

export default Header;