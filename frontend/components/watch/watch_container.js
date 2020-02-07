import { connect } from 'react-redux';
import React from 'react';
import { fetchSingleMovie } from '../../actions/content_actions';
import Watch from './watch';

const mapStateToProps = (state, ownProps) => ({
  movie: state.movies,
  id: ownProps.match.params.mediaId
});

const mapDispatchToProps = dispatch => ({
  fetchSingleMovie: mediaId => dispatch(fetchSingleMovie(mediaId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Watch);