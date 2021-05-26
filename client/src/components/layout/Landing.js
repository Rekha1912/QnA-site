import React, { Fragment } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to = '/dashboard'/>;
    }
    return (
        <Fragment>
            <div className = "landing">
                <h2> WANDERLUST </h2> 
                <h3> Travel related questions and their answers for Top Five countries </h3>
                    <div>
                        <Link to = '/register' className = "btn btn-secondary but1"> Sign Up </Link> 
                        <Link to = '/login' className = "btn btn-secondary but2"> Log In </Link>
                    </div>
            </div>
            <div className="footer bg-dark">
                <p> <i class="fas fa-copyright"></i>  2021 TRAVELPEDIA | Privacy and Cookies </p>
            </div>
        </Fragment>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);