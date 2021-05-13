import React from 'react';
import { Link } from 'react-router-dom';

const Landing= () => {
    return (
        <div className = "landing">

                <h1> WANDERLUST </h1>
                <h3> Travel related questions and their answers for Top Five countries </h3>
                <div className = "buttons">
                    <Link to = '/register' className = "btn btn-primary"> Sign Up </Link>
                    <Link to = '/login' className = "btn btn-primary"> Login </Link>
                </div>            
        </div>
    )
}

export default Landing;