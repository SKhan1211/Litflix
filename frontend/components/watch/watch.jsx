import React from 'react';

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
    return <video muted autoPlay loop controls src={this.state.currentMovie.videoURL}></video>
  }
}

export default Watch;