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
    this.clear = this.clear.bind(this);
  }

  handleOnHover(event) {
    window.timeout = null;
    if (!this.state.isHovered) {
      this.setState({ isHovered: true });
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
          {
            this.props.movies.map((movie, idx) => (
              <Link to="#" className="img-link-1">
                <img src={movie.photoURL} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
                <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player-blank" onMouseLeave={this.handleOffHover} src={movie.videoURL}></video>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ContentVideos;