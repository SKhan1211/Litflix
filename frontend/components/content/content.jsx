import React from 'react';
import { Link } from 'react-router-dom';

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

  //I can do a case statement to populate different arrays with my 6 videos, possibly passing those in as mSTP

  render() {
    return (
      <div className="structure-container">
        <div className="content-container">
          <div className="content-row-container">
            <h1>New Movies</h1>
            <div className="video-container">
              <Link to="#" className="video-link-1"><img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" /></Link>
              <Link to="#" className="video-link-2"><img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" /></Link>
              <Link to="#" className="video-link-3"><img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" /></Link>
              <Link to="#" className="video-link-4"><img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" /></Link>
              <Link to="#" className="video-link-5"><img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" /></Link>
              <Link to="#" className="video-link-6"><img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" /></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;