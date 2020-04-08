import * as APIUtil from '../util/list_item_api_util';

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

const addListItem = listItem => ({
  type: ADD_LIST_ITEM,
  listItem
});

const removeListItem = (listItem) => ({
  type: REMOVE_LIST_ITEM,
  listItem
});

export const createListItem = (userId, movieId) => dispatch => (
  APIUtil.createListItem(userId, movieId).then(listItem => (
    dispatch(addListItem(listItem))
  ))
);

export const deleteListItem = listItemid => (
  APIUtil.deleteListItem(listItemId).then(listItem => (
    dispatch(removeListItem(listItem))
  ))
);