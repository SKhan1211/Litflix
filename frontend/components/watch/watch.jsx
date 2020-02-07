import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMovie: {}
    }

    this.handleLinkHover = this.handleLinkHover.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleMovie(this.props.id).then(currentMovie => {
      this.setState({ currentMovie: currentMovie.movie })
    })
  }

  handleLinkHover(event) {
    event.currentTarget.className = "watch-link-browse-shown";
  }

  render() {
    return (
      <div className="watch-component">
        <div className="watch-box-div"><Link to="/browse" className="watch-link-browse" onMouseEnter={this.handleLinkHover}><img className="watch-back-arrow" src={window.backWhiteArrow} alt="" />Back to Browse</Link></div>
        <video className="watch-video" muted autoPlay loop controls src={this.state.currentMovie.videoURL}></video>
      </div>
    )
  }
}

export default Watch;