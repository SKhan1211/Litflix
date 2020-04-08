import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class ContentVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      currentMovie: {},
      currentUser: store.getState().session.id
    };

    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleOffHover = this.handleOffHover.bind(this);
    this.clear = this.clear.bind(this);
    this.handleListButtonClick = this.handleListButtonClick.bind(this);
  }

  handleOnHover(event) {
    window.timeout = null;
    if (!this.state.isHovered) {
      this.setState({ isHovered: true });
      event.persist();
      timeout = setTimeout(() => {
        // event.target.parentElement.children[2].className = "mini-video-player"
        event.target.parentElement.children[1].className = "img-link-vid-container";
      }, 700)
    }
  }

  handleOffHover(event) {
    clearTimeout(timeout)
    if (this.state.isHovered) {
      this.setState({ isHovered: false, currentMovie: {} })
      
      if (event.target.parentElement.className === "img-link-vid-container") {
        event.target.parentElement.className = "img-link-vid-container-hidden";
      } else if (event.target.parentElement.parentElement.className === "img-link-info-container") { 
        event.target.parentElement.parentElement.parentElement.parentElement.className = "img-link-vid-container-hidden"
      } else if (event.target.className === "far fa-play-circle") {
        event.target.parentElement.parentElement.parentElement.className = "img-link-vid-container-hidden"
      } else {
        event.target.parentElement.parentElement.className = "img-link-vid-container-hidden";
      }
    }
  }

  clear(event) {
    clearTimeout(timeout)
    if (event.target.parentElement.children[1].className !== 'img-link-vid-container') {
      this.setState({ isHovered: false})
    }
  }

  renderCheckOrPlus() {
    if (store.getState().session.listItems.includes(movie.id)) return <i className="fas fa-check" onClick={() => this.handleListButtonClick(event, this.state.currentUser, movie.id)}></i>
    else return <i className="fas fa-plus" onClick={() => this.handleListButtonClick(event, this.state.currentUser, movie.id)}></i>
  }

  handleListButtonClick(event, userId, movieId) {
    if (event.target.className === "fas fa-plus") {
      this.props.createListItem(userId, movieId)
      event.target.className = "fas fa-check"
    } else if (event.target.className === "fas fa-check") {
      let listItemId = store.getState().listItems[0].filter(el => el.movie_id === movieId)[0].id;
      this.props.deleteListItem(listItemId);
      event.target.className = "fas fa-plus"
    }
  }

  render() {  
    return (
      <div className="content-row-container">
        <h1>{this.props.title}</h1>
        <div className="video-container">
          {
            this.props.movies.map((movie, idx) => (
              <div className="img-link-1">
                <img src={movie.photoURL} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} onClick={() => this.props.history.push(`/watch/${movie.id}`)} />
                <div className="img-link-vid-container-hidden" onMouseLeave={this.handleOffHover}>
                  <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player" onMouseLeave={this.handleOffHover} src={movie.videoURL}></video>
                  <div id="img-link-text" className="img-link-text-container">
                    <div><i className="far fa-play-circle" onClick={() => this.props.history.push(`/watch/${movie.id}`)}></i></div>
                    <div className="img-link-info-container">
                      <div>
                        <h1>{movie.title}</h1>
                        <h2>{movie.rating}, {movie.length}</h2>
                        <p>{movie.genre}</p>
                      </div>
                      <button>{this.renderCheckOrPlus()}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

          {/* <div className="img-link-1">
            <img src={"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <div className="img-link-vid-container-hidden" onMouseLeave={this.handleOffHover}>
              <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player" onMouseLeave={this.handleOffHover} src={"https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm"}></video>
              <div id="img-link-text" className="img-link-text-container">
                <div><i className="far fa-play-circle" onClick={() => this.props.history.push(`/watch/${movie.id}`)}></i></div>
                <div className="img-link-info-container">
                  <div>
                    <h1>Movie title</h1>
                    <h2>MPAA, length</h2>
                    <p>Genre</p>
                  </div>
                  <button><i className="fas fa-plus" onClick={() => this.handleListButtonClick(event, this.state.currentUser, 9)}></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-link-1">
            <img src={"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <div className="img-link-vid-container-hidden" onMouseLeave={this.handleOffHover}>
              <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player" onMouseLeave={this.handleOffHover} src={"https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm"}></video>
              <div id="img-link-text" className="img-link-text-container">
                <div><i className="far fa-play-circle" onClick={() => this.props.history.push(`/watch/${movie.id}`)}></i></div>
                <div className="img-link-info-container">
                  <div>
                    <h1>Movie title</h1>
                    <h2>MPAA, length</h2>
                    <p>Genre</p>
                  </div>
                  <button><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-link-1">
            <img src={"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <div className="img-link-vid-container-hidden" onMouseLeave={this.handleOffHover}>
              <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player" onMouseLeave={this.handleOffHover} src={"https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm"}></video>
              <div id="img-link-text" className="img-link-text-container">
                <div><i className="far fa-play-circle" onClick={() => this.props.history.push(`/watch/${movie.id}`)}></i></div>
                <div className="img-link-info-container">
                  <div>
                    <h1>Movie title</h1>
                    <h2>MPAA, length</h2>
                    <p>Genre</p>
                  </div>
                  <button><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-link-1">
            <img src={"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <div className="img-link-vid-container-hidden" onMouseLeave={this.handleOffHover}>
              <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player" onMouseLeave={this.handleOffHover} src={"https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm"}></video>
              <div id="img-link-text" className="img-link-text-container">
                <div><i className="far fa-play-circle" onClick={() => this.props.history.push(`/watch/${movie.id}`)}></i></div>
                <div className="img-link-info-container">
                  <div>
                    <h1>Movie title</h1>
                    <h2>MPAA, length</h2>
                    <p>Genre</p>
                  </div>
                  <button><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-link-1">
            <img src={"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <div className="img-link-vid-container-hidden" onMouseLeave={this.handleOffHover}>
              <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player" onMouseLeave={this.handleOffHover} src={"https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm"}></video>
              <div id="img-link-text" className="img-link-text-container">
                <div><i className="far fa-play-circle" onClick={() => this.props.history.push(`/watch/${movie.id}`)}></i></div>
                <div className="img-link-info-container">
                  <div>
                    <h1>Movie title</h1>
                    <h2>MPAA, length</h2>
                    <p>Genre</p>
                  </div>
                  <button><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-link-1">
            <img src={"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"} alt="Lorem Ipsum" className="row-1-col-1" onMouseEnter={this.handleOnHover} onMouseLeave={this.clear} />
            <div className="img-link-vid-container-hidden" onMouseLeave={this.handleOffHover}>
              <video muted autoPlay loop width="100" id="first-vid" className="mini-video-player" onMouseLeave={this.handleOffHover} src={"https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm"}></video>
              <div id="img-link-text" className="img-link-text-container">
                <div><i className="far fa-play-circle" onClick={() => this.props.history.push(`/watch/${movie.id}`)}></i></div>
                <div className="img-link-info-container">
                  <div>
                    <h1>Movie title</h1>
                    <h2>MPAA, length</h2>
                    <p>Genre</p>
                  </div>
                  <button><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    )
  }
}

export default withRouter(ContentVideos);