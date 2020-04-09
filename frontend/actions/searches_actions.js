import * as APIUtil from '../util/searches_api_util';

export const RETURN_SEARCH_QUERY_MOVIES = 'RETURN_SEARCH_QUERY_MOVIES';

const returnSearchQueryMovies = searchQueryMovies => ({
  type: RETURN_SEARCH_QUERY_MOVIES,
  searchQueryMovies
})

export const fetchSearchedMovies = searchQuery => dispatch => (
  APIUtil.fetchSearchedMovies(searchQuery).then(searchQueryMovies => (
    dispatch(returnSearchQueryMovies(searchQueryMovies))
  ))
);