import React from 'react';
import { Link } from 'react-router-dom';

const Navbar= () => {
    return (
        <nav className = "jumbotron bg-dark">
            <div className = "navbar">
                <h1> 
                    <Link to = '/'>
                        Travelpedia
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to = '/register'> Register </Link>
                    </li>
                    <li>
                        <Link to = '/login'> Login </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;