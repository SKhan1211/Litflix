import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors, session }) => {
  return {
    errors: errors.session,
    navLink: <Link to="/login">Sign In</Link>,
    requestedUser: session.requestedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
