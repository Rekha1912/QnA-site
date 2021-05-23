import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to = '/dashboard'/>;
    }
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

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);