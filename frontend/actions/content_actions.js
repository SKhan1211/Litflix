import { fetchMovies } from '../util/content_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';

const receiveAllMovies = moviesArr => ({
  type: RECEIVE_ALL_MOVIES,
  moviesArr
});

export const fetchAllMovies = () => dispatch => (
  fetchMovies().then(moviesArr => (
    dispatch(receiveAllMovies(moviesArr))
  ))
);