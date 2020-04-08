export const createListItem = (userId, movieId) => (
  $.ajax({
    method: 'POST',
    url: '/api/list_items',
    data: { userId, movieId }
  })
) 

export const deleteListItem = listItemId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/list_items/${listItemId}`
  })
)