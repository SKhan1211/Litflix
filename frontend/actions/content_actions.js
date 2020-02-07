import { fetchMovies, fetchMovie } from '../util/content_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveAllMovies = moviesArr => ({
  type: RECEIVE_ALL_MOVIES,
  moviesArr
});

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
})

export const fetchAllMovies = () => dispatch => (
  fetchMovies().then(moviesArr => (
    dispatch(receiveAllMovies(moviesArr))
  ))
);

export const fetchSingleMovie = movieId => dispatch => (
  fetchMovie(movieId).then(movie => (
    dispatch(receiveMovie(movie))
  ))
);