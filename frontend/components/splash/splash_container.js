import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { receiveRequestedUser, login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  requestedUser: { requestedUser: ''}
});

const mapDispatchToProps = dispatch => ({
  receiveRequestedUser: (username) => dispatch(receiveRequestedUser(username)),
  demoLogin: demoUser => dispatch(login(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);