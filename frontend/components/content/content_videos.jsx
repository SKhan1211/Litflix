import React from 'react';
import { Link } from 'react-router-dom';

class ContentVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };

    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleOffHover = this.handleOffHover.bind(this);
  }

  handleOnHover(event) {
    window.timeout = null;
    if (!this.state.isHovered) {
      this.setState({ isHovered: true });
      event.persist();
      timeout = setTimeout(() => {
        event.target.parentElement.children[2].className = "mini-video-player"
      }, 1)
    }
  }

  handleOffHover(event) {
    clearTimeout(timeout)
    if (this.state.isHovered) {
      this.setState({ isHovered: false })
      event.currentTarget.className = "mini-video-player-blank";
    }
  }

  render() {
    return (
      <div className="content-row-container">
        <h1>New Movies</h1>
        <div className="video-container">
          <Link to="#" className="img-link-1">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} />
            <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player-blank" onMouseLeave={this.handleOffHover}>
              <source src="https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm" type="video/mp4" />
            </video>
          </Link>
          <Link to="#" className="img-link-2">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-2" onMouseEnter={this.handleOnHover} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover}>
              <source src="https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm" type="video/mp4" />
            </video>
          </Link>
          <Link to="#" className="img-link-3">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-3" onMouseEnter={this.handleOnHover} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover}>
              <source src="https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm" type="video/mp4" />
            </video>
          </Link>
          <Link to="#" className="img-link-4">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-4" onMouseEnter={this.handleOnHover} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover}>
              <source src="https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm" type="video/mp4" />
            </video>
          </Link>
          <Link to="#" className="img-link-5">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-5" onMouseEnter={this.handleOnHover} />
            <video muted autoPlay loop width="100" className="mini-video-player-blank" onMouseLeave={this.handleOffHover}>
              <source src="https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm" type="video/mp4" />
            </video>
          </Link>
          <Link to="#" className="img-link-6">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png" alt="Lorem Ipsum" className="row-1-col-6" onMouseEnter={this.handleOnHover} />
            <video muted autoPlay loop width="100" id="last-vid" className="mini-video-player-blank" onMouseLeave={this.handleOffHover}>
              <source src="https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm" type="video/mp4" />
            </video>
          </Link>
        </div>
      </div>
    )
  }
}

export default ContentVideos;