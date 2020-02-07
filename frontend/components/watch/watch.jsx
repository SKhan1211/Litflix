import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMovie: {}
    }
  }

  componentDidMount() {
    this.props.fetchSingleMovie(this.props.id).then(currentMovie => {
      this.setState({ currentMovie: currentMovie.movie })
    })
  }

  render() {
    return (
      <div className="watch-component">
        <Link to="/browse" className="watch-link-browse"><img className="watch-back-arrow" src={window.backWhiteArrow} alt="" />Back to Browse</Link>
        <video className="watch-video" muted autoPlay loop controls src={this.state.currentMovie.videoURL}></video>
      </div>
    )
  }
}

export default Watch;