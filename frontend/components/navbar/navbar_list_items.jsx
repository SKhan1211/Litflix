import React from 'react';
import { Link } from 'react-router-dom';

class NavbarListItem extends React.Component {
  constructor(props) {
    super(props);  
  };

  render() {
    return (
      <div className="navbar-list-items-container">
        {
          this.props.fetchedMovies.map((movie, idx) => {
            const MY_ROUTE = `/watch/${movie.id}`;
            return (
              <Link to={MY_ROUTE} className="navbar-list-items-link">
                <img className="navbar-list-items-img" src={movie.photoURL} alt="Movie title card"/>
                <div className="navbar-list-items-textdiv">
                  <h3>{this.props.navbarTitles[idx]}</h3>
                  <p>{this.props.navbarDaysAgo[idx]}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

export default NavbarListItem

