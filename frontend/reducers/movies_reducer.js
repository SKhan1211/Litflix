import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../actions/content_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.moviesArr;
    case RECEIVE_MOVIE:
      return action.movie
    default:
      return state;
  };
};