import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-component">
        <div className="navbar-box">
          <div></div>
          <div className="navbar-left">
            <Link to={"/browse"} className="navbar-left-link">Home</Link>
            <Link to={"/browse"} className="navbar-left-link">TV Shows</Link>
            <Link to={"/browse"} className="navbar-left-link">Movies</Link>
            <Link to={"/browse"} className="navbar-left-link">Latest</Link>
            <Link to={"/browse"} className="navbar-left-link">My List</Link>
          </div>
          <div className="trial-margin"></div>
          <div className="navbar-right">
            <img src={window.searchIcon} height="20" width="20" />
            <Link className="navbar-right-link" to={"/browse"}>DVD</Link>
            <img src={window.whiteBellIcon} height="35" width="35" />
            <div className="profile-pic-container">
              <img src={window.profilePic} height="360" width="490" />
              <p>▼</p>
              <figure className="up-arrow">▲</figure>
              <div className="profile-dropdown">
                <section className="dropdown-section-1">
                  <Link to="#" className="profile-dropdown-link">Manage Profiles</Link>
                </section>
                <section className="dropdown-section-2">
                  <Link to="#" className="profile-dropdown-link2" style={{ fontWeight: 'bold' }}>Account</Link>
                  <Link to="#" className="profile-dropdown-link2" style={{ fontWeight: 'bold' }}>Help Center</Link>
                  <Link to="/" onClick={this.props.logout} className="profile-dropdown-link2" style={{ fontWeight: 'bold' }}>Sign out of Litflix</Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default NavBar;