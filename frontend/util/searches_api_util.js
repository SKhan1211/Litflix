export const fetchSearchedMovies = search_query => (
  $.ajax({
    method: 'GET',
    url: '/api/searches',
    data: { search_query }
  })
)