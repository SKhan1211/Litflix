export const createListItem = (userId, movieId) => (
  $.ajax({
    method: 'POST',
    url: '/api/list_items',
    data: { list_item: { user_id: userId, movie_id: movieId } }
  })
) 

export const deleteListItem = listItemId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/list_items/${listItemId}`
  })
)