import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import moviesReducer from './movies_reducer';
import listItemReducer from './list_item_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  movies: moviesReducer,
  listItems: listItemReducer
});

export default rootReducer;
