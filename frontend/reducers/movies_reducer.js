import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../actions/content_actions';
import { RETURN_SEARCH_QUERY_MOVIES } from '../actions/searches_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.moviesArr;
    case RECEIVE_MOVIE:
      return action.movie
    case RETURN_SEARCH_QUERY_MOVIES:
      return action.searchQueryMovies
    default:
      return state;
  };
};