import React from 'react';
import { Link } from 'react-router-dom';
import ContentVideos from './content_videos';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movie: {}
    };
  }

  render() {
    return (
      <div className="structure-container">
        <div className="content-container">
          <ContentVideos title={"Action"} movieIds={[2, 3, 4, 5, 6, 7]} url={this.state.movie.videoURL} />
          <ContentVideos title={"Adventure"} movieIds={[8, 9, 10, 11, 12, 13]} url={this.state.movie.videoURL} />
          <ContentVideos title={"Comedy"} movieIds={[14, 15, 16, 17, 18, 19]} url={this.state.movie.videoURL} />
          <ContentVideos title={"Drama"} movieIds={[20, 21, 22, 23, 24, 25]} url={this.state.movie.videoURL} />
          <ContentVideos title={"Horror"} movieIds={[26, 27, 28, 29, 30, 31]} url={this.state.movie.videoURL} />
          <ContentVideos title={"Sci-Fi"} movieIds={[32, 33, 34, 35, 36, 37]} url={this.state.movie.videoURL} />
          <ContentVideos title={"Romance"} movieIds={[38, 39, 40, 41, 42, 43]} url={this.state.movie.videoURL} />
        </div>
      </div>
    )
  }
}

export default Content;