import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  navLink: <Link to="/">Try 30 days free</Link>
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);