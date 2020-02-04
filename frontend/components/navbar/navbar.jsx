import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      mouseOverMenu: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFastClose = this.handleFastClose.bind(this);
    this.displayNotification = this.displayNotification.bind(this);
    this.undisplayNotification = this.undisplayNotification.bind(this);
  };

  handleOpen() {
    setTimeout(() => {
      this.setState({ isOpen: true })
    }, 10)
  };

  handleClose() {
    setTimeout(() => {
      this.setState({ isOpen: false })
    }, 300);
  };

  handleFastClose() {
    this.setState({ isOpen: false, mouseOverMenu: false })
  }

  displayNotification() {
    this.setState({ mouseOverMenu: true })
  };

  undisplayNotification() {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false })
    }, 300);
  }

  renderNotificationDropdown() {
    if (this.state.isOpen || this.state.mouseOverMenu) {
      return (
        <div className="notif-dropdown-outer" onMouseEnter={this.displayNotification} onMouseLeave={this.undisplayNotification}>
          <div className="notif-up-arrow">▲</div>
          <div className="notification-dropdown">
            <ul>Content to be added...</ul>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="navbar-component">
        <div className="navbar-box">
          <div></div>
          <div className="navbar-left">
            <Link to={"/browse"} className="navbar-left-link">Home</Link>
            <Link to={"/browse"} className="navbar-left-link">Movies</Link>
            <Link to={"/browse"} className="navbar-left-link">Latest</Link>
            <Link to={"/browse"} className="navbar-left-link">My List</Link>
          </div>
          <div className="trial-margin"></div>
          <div className="navbar-right">
            <img src={window.searchIcon} height="20" width="20" />
            <Link className="navbar-right-link" to={"/browse"}>DVD</Link>
            <img src={window.whiteBellIcon} height="35" width="35" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}/>
            {this.renderNotificationDropdown()}
            <div className="profile-pic-container">
              <img src={window.profilePic} height="360" width="490" onMouseEnter={this.handleFastClose}/>
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