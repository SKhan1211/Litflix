import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    $.ajax({
      url: "/api/movies",
      method: "GET"
    }).then(movies => {
      this.setState({movies});
    });
  };

  componentDidMount() {
    // this.fetchMovies();
  }

  render() {
    return <h1>Movie</h1> //Give padding-top 68px to top level div to get it below navbar component
  }
}

export default Content;