import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { receiveRequestedUser } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  requestedUser: { requestedUser: ''}
});

const mapDispatchToProps = dispatch => ({
  receiveRequestedUser: (username) => dispatch(receiveRequestedUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);