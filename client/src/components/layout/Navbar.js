import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    
    const authLinks = (
        <ul>
            <li>
                <Link to = '/quests'> 
                <i className ="fas fa-globe"></i>{'    '} HOME </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className ="fas fa-power-off"></i>{'    '} LOG OUT  </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to = '/register'> 
                <i class="fas fa-user-plus"></i>{'    '}REGISTER </Link>
            </li>
            <li>
                <Link to = '/login'> 
                <i class="fas fa-sign-in-alt"></i> {'    '} LOG IN </Link>
            </li>
        </ul>
    );

    return (
        <div className = "jumbotron bg-dark">
            <div class = "mainhead">
                <div className= "box1">
                    <h1> 
                        <Link to = '/'>
                            <i className="fas fa-paper-plane"></i>{'  '}TRAVELPEDIA 
                        </Link>
                    </h1>
                </div>
                <div className= "box2">
                    { !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks } </Fragment>)}
                </div>
            </div>
        </div>
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