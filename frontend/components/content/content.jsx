import React from 'react';
import { Link } from 'react-router-dom';
import ContentVideos from './content_videos';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: []
    };

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
    // this.fetchMovies(); Make this fetchMovie and grab movie by id
  }

  //I can do a case statement to populate different arrays with my 6 videos, possibly passing those in as mSTP

  render() {
    return (
      <div className="structure-container">
        <div className="content-container">
          <ContentVideos />
          <ContentVideos />
          <ContentVideos />
          <ContentVideos />
          <ContentVideos />
          <ContentVideos />
        </div>
      </div>
    )
  }
}

export default Content;