import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { fetchAllMovies } from '../../actions/content_actions';
import Content from './content';

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  fetchAllMovies: () => dispatch(fetchAllMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);