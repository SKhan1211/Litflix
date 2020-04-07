import React from 'react';
import { Link } from 'react-router-dom';
import ContentVideos from './content_videos';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieSet1: [],
      movieSet2: [],
      movieSet3: [],
      movieSet4: [],
      movieSet5: [],
      movieSet6: [],
      movieSet7: []
    };

    this.divideByGenre = this.divideByGenre.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllMovies().then(movies => this.divideByGenre(movies))
  }

  divideByGenre(movies) {
    const action = [];
    const adventure = [];
    const comedy = [];
    const drama = [];
    const horror = [];
    const scifi = [];
    const romance = [];

    movies.moviesArr.forEach(movie => {
      if (movie.genre === 'Action') {
        action.push(movie)
      } else if (movie.genre === 'Adventure') {
        adventure.push(movie)
      } else if (movie.genre === 'Comedy') {
        comedy.push(movie)
      } else if (movie.genre === 'Drama') {
        drama.push(movie)
      } else if (movie.genre === 'Horror') {
        horror.push(movie)
      } else if (movie.genre === 'Sci-fi') {
        scifi.push(movie)
      } else if (movie.genre === 'Romance') {
        romance.push(movie)
      }
    });

    this.setState({ 
      movieSet1: action,
      movieSet2: adventure,
      movieSet3: comedy,
      movieSet4: drama,
      movieSet5: horror,
      movieSet6: scifi,
      movieSet7: romance 
    });
  }

  render() {
    return (
      <div className="structure-container">
        {this.props.path === "browse" ? 
          <div className="content-container">
            <ContentVideos title={"Action"} movies={this.state.movieSet1} title={"Action"} />
            <ContentVideos title={"Adventure"} movies={this.state.movieSet2} title={"Adventure"} />
            <ContentVideos title={"Comedy"} movies={this.state.movieSet3} title={"Comedy"} />
            <ContentVideos title={"Drama"} movies={this.state.movieSet4} title={"Drama"} />
            <ContentVideos title={"Horror"} movies={this.state.movieSet5} title={"Horror"} />
            <ContentVideos title={"Sci-Fi"} movies={this.state.movieSet6} title={"Sci-Fi"} />
            <ContentVideos title={"Romance"} movies={this.state.movieSet7} title={"Romance"} />
          </div>
        : this.props.path === "movies" ? 
          <div className="content-container">
            <ContentVideos title={"Newer Releases"} movies={this.state.movieSet3.slice(0, 3).concat(this.state.movieSet6.slice(0, 3))} />
            <ContentVideos title={"Trending Now"} movies={this.state.movieSet2.slice(0, 3).concat(this.state.movieSet5.slice(0, 2))}  />
            <ContentVideos title={"Popular on Litflix"} movies={this.state.movieSet1.slice(0, 3).concat(this.state.movieSet4.slice(0, 3))}  />
            <ContentVideos title={"Continue Watching"} movies={this.state.movieSet5.slice(3, 6).concat(this.state.movieSet7.slice(3, 6))}  />
            <ContentVideos title={"Top Picks for You"} movies={this.state.movieSet4.slice(3, 5).concat(this.state.movieSet1.slice(3, 5))} />
            <ContentVideos title={"Continue Watching"} movies={this.state.movieSet7.slice(3, 6).concat(this.state.movieSet2.slice(3, 6))}  />
          </div>
        :
          <div className="content-container">
            <ContentVideos title={"Latest Releases"} movies={this.state.movieSet3.slice(0, 3).concat(this.state.movieSet6.slice(0, 3))} />
          </div>
        }
      </div>
    )
  }
}

export default Content;