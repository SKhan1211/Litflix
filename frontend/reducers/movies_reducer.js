import { RECEIVE_ALL_MOVIES } from '../actions/content_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.moviesArr;
    default:
      return state;
  };
};