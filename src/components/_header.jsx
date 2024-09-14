import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/explore">Explore</Link>
                </li>
                <li>
                    <Link to="/booking">Booking</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;