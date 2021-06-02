import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData ({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/quests" />;
    }

    return (
        <Fragment>
            <div className="loginbox">
                <h2> <i class="fas fa-user"></i> SIGN IN </h2>
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <input type="submit" className="btn btn-secondary" value="Login" />
                    </form>
                <p className="lfoot">
                    Don't have an account? <Link to="/register" className="btn btn-secondary">Sign Up</Link>
                </p>
            </div>
        </Fragment>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, {login} ) (Login);