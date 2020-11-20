import React from 'react'

const Navbar= () => {
    return (
        <nav className = "jumbotron bg-dark">
            <div className = "navbar">
                <h1> 
                    <a href = "index.html">
                        Home
                    </a>
                </h1>
                <ul>
                    <li>
                        <a href = "register.html"> Register </a>
                    </li>
                    <li>
                        <a href = "login.html"> Login </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;