import React from 'react';
import { Link } from 'react-router-dom';
import ContentVideos from './content_videos';

// const testModel1 = {
//   id: 1, 
//   title: "John Wick: Chapter 3 - Parabellum", 
//   description:
//     "John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
//   year: 2019,
//   length: "2h 11m",
//   rating: "R",
//   starring_actors: "Keanu Reeves, Halle Berry",
//   genre: "Action",
//   photoURL: "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png",
//   videoURL: "https://ak4.picdn.net/shutterstock/videos/1014118994/preview/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm"
// }

// const testModel2 = {
//   id: 2,
//   title: "Avengers: Endgame",
//   description:
//     "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.",
//   year: 2019,
//   length: "3h 1m",
//   rating: "PG-13",
//   starring_actors: "Robert Downey Jr., Chris Evans",
//   genre: "Action",
//   photoURL: "https://i.picsum.photos/id/880/400/300.jpg",
//   videoURL: "https://ak4.picdn.net/shutterstock/videos/1013991794/preview/stock-footage-news-paper-rolling-up-the-screen-and-into-focus-with-a-shallow-depth-of-field-and-lorem-ipsum.webm"
// }

// const testModels = [testModel1, testModel2];

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
      movieSet7: [],
      myList: []
    };

    this.divideByGenre = this.divideByGenre.bind(this);
    this.renderMyList = this.renderMyList.bind(this);
  }

  componentDidMount() {
    if (this.props.path === "mylist") {
      store.getState().listItems[0].forEach(el => {
        this.props.fetchSingleMovie(el.movie_id).then(movie => {
          this.setState({ myList: this.state.myList.concat([movie]) })
        });

        // this.setState({ myList: this.state.myList.concat([testModel2]) })

      });
    } else {
      this.props.fetchAllMovies().then(movies => this.divideByGenre(movies))
    }
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

  renderMyList() {
    let x = 0;
    let y = 6;
    let arr = [];
    for (let i = 0; i <= Math.ceil(this.state.myList.length / 6); i++) {
      return <ContentVideos title={""} movies={this.state.myList.slice(x, y)} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
      x += 6;
      y += 6;
    }
  }

  render() {
    return (
      <div className="structure-container">
        {this.props.path === "browse" ? 
          <div className="content-container">
            <ContentVideos title={"Action"} movies={this.state.movieSet1} title={"Action"} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Adventure"} movies={this.state.movieSet2} title={"Adventure"} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Comedy"} movies={this.state.movieSet3} title={"Comedy"} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Drama"} movies={this.state.movieSet4} title={"Drama"} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Horror"} movies={this.state.movieSet5} title={"Horror"}  createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Sci-Fi"} movies={this.state.movieSet6} title={"Sci-Fi"}  createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Romance"} movies={this.state.movieSet7} title={"Romance"}  createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
          </div>
        : this.props.path === "movies" ? 
          <div className="content-container">
            <ContentVideos title={"Newer Releases"} movies={this.state.movieSet3.slice(0, 3).concat(this.state.movieSet6.slice(0, 3))} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Trending Now"} movies={this.state.movieSet2.slice(0, 3).concat(this.state.movieSet5.slice(0, 2))}  createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Popular on Litflix"} movies={this.state.movieSet1.slice(0, 3).concat(this.state.movieSet4.slice(0, 3))}  createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Continue Watching"} movies={this.state.movieSet5.slice(3, 6).concat(this.state.movieSet7.slice(3, 6))}  createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={"Top Picks for You"} movies={this.state.movieSet4.slice(3, 5).concat(this.state.movieSet1.slice(3, 5))} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
          </div>
        : this.props.path === "latest" ?
          <div className="content-container">
            <ContentVideos title={"Latest Releases"} movies={this.state.movieSet4.slice(0, 3).concat(this.state.movieSet2.slice(0, 3))} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={""} movies={this.state.movieSet7.slice(0, 3).concat(this.state.movieSet1.slice(0, 3))} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
            <ContentVideos title={""} movies={this.state.movieSet2.slice(0, 3).concat(this.state.movieSet5.slice(0, 3))} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} />
          </div>
        : <div className="content-container">
            { this.renderMyList() }
          </div>
        }
      </div>
    )
  }
}

export default Content;