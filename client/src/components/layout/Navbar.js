import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    
    const authLinks = (
        <ul>
            <li>
                <Link to = '/quests'> Questions </Link>
            </li>
            <li>
                <Link to = '/dashboard'> 
                <i className ="fas fa-globe"></i>{'  '} DASHBOARD </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className ="fas fa-power-off"></i>{'  '} LOGOUT  </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to = '/register'> Register </Link>
            </li>
            <li>
                <Link to = '/login'> Login </Link>
            </li>
        </ul>
    );

    return (
        <nav className = "jumbotron bg-dark">
            <div className = "navbar">
                <h1> 
                    <Link to = '/'>
                        <i className="fas fa-paper-plane"></i>{'  '}Travelpedia
                    </Link>
                </h1>
                { !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks } </Fragment>)}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout}) (Navbar);