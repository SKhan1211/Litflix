import { ADD_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/list_item_actions';

const listItemReducer = (state = [[]], action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return [state[0].concat(action.listItem)];
    case REMOVE_LIST_ITEM:
      return [state[0].filter(el => el.id !== action.listItem.id)];
    default:
      return state;
  };
};

export default listItemReducer;