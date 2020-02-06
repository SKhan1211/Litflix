import React from 'react';
import { Link } from 'react-router-dom';

class ContentVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      currentMovie: {}
    };

    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleOffHover = this.handleOffHover.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.clear = this.clear.bind(this);
  }

  fetchMovie(movieId) {
    let that = this;
    $.ajax({
      url: `/api/movies/${movieId}`,
      method: "GET"
    }).then(currentMovie => {
      that.setState({currentMovie});
    });
  };

  handleOnHover(event) {
    window.timeout = null;
    if (!this.state.isHovered) {
      this.setState({ isHovered: true });
      this.fetchMovie(parseInt(event.currentTarget.name))
      event.persist();
      timeout = setTimeout(() => {
        event.target.parentElement.children[2].className = "mini-video-player"
      }, 700)
    }
  }

  handleOffHover(event) {
    clearTimeout(timeout)
    if (this.state.isHovered) {
      this.setState({ isHovered: false, currentMovie: {} })
      event.currentTarget.className = "mini-video-player-blank";
    }
  }

  clear(event) {
    clearTimeout(timeout)
    if (event.target.parentElement.children[2].className !== 'mini-video-player') {
      this.setState({ isHovered: false})
    }
  }

  render() {
    return (
      <div className="content-row-container">
        <h1>{this.props.title}</h1>
        <div className="video-container">
          <Link to="#" className="img-link-1">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-1" name={this.props.movieIds[0].toString()} onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player-blank" onMouseLeave={this.handleOffHover} src={this.state.currentMovie.videoURL}></video>
          </Link>
          <Link to="#" className="img-link-2">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-2" name={this.props.movieIds[1].toString()} onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover} src={this.state.currentMovie.videoURL}></video>
          </Link>
          <Link to="#" className="img-link-3">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-3" name={this.props.movieIds[2].toString()} onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover} src={this.state.currentMovie.videoURL}></video>
          </Link>
          <Link to="#" className="img-link-4">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-4" name={this.props.movieIds[3].toString()} onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover} src={this.state.currentMovie.videoURL}></video>
          </Link>
          <Link to="#" className="img-link-5">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-5" name={this.props.movieIds[4].toString()} onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover} src={this.state.currentMovie.videoURL}></video>
          </Link>
          <Link to="#" className="img-link-6">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-6" name={this.props.movieIds[5].toString()} onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <video muted autoPlay loop width="100" id="last-vid" className="mini-video-player-blank" onMouseLeave={this.handleOffHover} src={this.state.currentMovie.videoURL}></video>
          </Link>
        </div>
      </div>
    )
  }
}

export default ContentVideos;