import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarListItems from './navbar_list_items';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      mouseOverMenu: false,
      fetchedMovies: [],
      searchInputShown: false,
      searchQuery: ""
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFastClose = this.handleFastClose.bind(this);
    this.displayNotification = this.displayNotification.bind(this);
    this.undisplayNotification = this.undisplayNotification.bind(this);
    this.fetchSomeMovies = this.fetchSomeMovies.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchEnter = this.handleSearchEnter.bind(this);
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

  fetchSomeMovies() {
    let that = this;
    let moviesArr = [40, 36, 32, 28, 26, 22, 18, 12, 3];

    moviesArr.forEach((num, idx) => {
      this.props.fetchSingleMovie(num).then(movie => {
        moviesArr[idx] = movie.movie
      })
    })

    this.setState({ fetchedMovies: moviesArr })
  }


  componentDidMount() {
    // this.fetchSomeMovies();
  }

  handleSearchInput() {
    if (this.state.searchInputShown 
          && event.target.className !== "navbar-search-input-shown" 
          && document.getElementsByClassName("navbar-search-input-shown").length > 1
        ) {
      document.getElementsByClassName("navbar-search-input-shown")[0].className = "navbar-search-input-hidden";
      let container = document.getElementsByClassName("navbar-right")[0]
      let firstHalfClassName = container.className.slice(0, 12);
      container.className = firstHalfClassName + " smaller-width"
      this.setState({ searchInputShown: false });

      document.removeEventListener("click", this.handleSearchInput)
    } else if (!this.state.searchInputShown) {
      let input = document.getElementsByClassName("navbar-search-input-hidden")[0]
      input.focus();
      input.className = "navbar-search-input-shown";
      let container = document.getElementsByClassName("navbar-right")[0]
      let firstHalfClassName = container.className.slice(0, 12);
      container.className = firstHalfClassName + " bigger-width"
      this.setState({ searchInputShown: true });

      document.addEventListener("click", this.handleSearchInput)
    };
  };

  renderNotificationDropdown() {
    const navbarTitlesArr = [
      "Now Available to Watch",
      "Continue Watching Captive State",
      "New Arrival Ad Astra",
      "Wondering what to watch? We suggest Annabelle Comes Home",
      "New Arrival Scary Stories to Tell in the Dark",
      "New Arrival Ford vs Ferrari",
      "New Arrival Isn't It Romantic",
      "Now Available to Watch",
      "Now Available to Watch"
    ];
    const navbarDaysAgoArr = [
      "5 days ago",
      "8 days ago",
      "10 days ago",
      "2 weeks ago",
      "1 month ago",
      "1 month ago",
      "2 months ago",
      "2 months ago",
      "2 months ago"
    ];
    if (this.state.isOpen || this.state.mouseOverMenu) {
      return (
        <div className="notif-dropdown-outer" onMouseEnter={this.displayNotification} onMouseLeave={this.undisplayNotification}>
          <div className="notif-up-arrow">▲</div>
          <div className="notification-dropdown">
            <ul><NavbarListItems fetchedMovies={this.state.fetchedMovies} navbarTitles={navbarTitlesArr} navbarDaysAgo={navbarDaysAgoArr}/></ul>
          </div>
        </div>
      )
    }
  }

  handleSearch() {
    this.setState({ searchQuery: event.target.value })
  }

  handleSearchEnter() {
    if (event.key === "Enter") {
      if (this.state.searchQuery.length > 0 && this.props.location.pathname !== "/search") {
        this.props.history.push(`/search?search_term=${this.state.searchQuery}`);
      } else if (this.props.location.pathname === "/search") {
        this.props.history.push(`/search?search_term=${this.state.searchQuery}`);
        window.location.reload();
      } else {
        this.props.history.push("/latest");
      } 
    } else if (event.key === "Backspace" && this.props.location.pathname === "/search" && this.state.searchQuery.length === 0) {
      this.props.history.push("/latest");
    }
  }

  render() {
    return (
      <div className="navbar-component">
        <div className="navbar-box">
          <div></div>
          <Link to="/browse" id="first-link-navbar"><img src={window.bendyLogo} width="120" height="74" /></Link>
          <div className="navbar-left">
            <Link to={"/browse"} className="navbar-left-link">Home</Link>
            <Link to={"/movies"} className="navbar-left-link">Movies</Link>
            <Link to={"/latest"} className="navbar-left-link">Latest</Link>
            <Link to={"/mylist"} className="navbar-left-link">My List</Link>
          </div>
          <div className="trial-margin"></div>
          <div className="navbar-right smaller-width">
            {/* <img src={window.searchIcon} height="20" width="20" /> */}
            <div className="navbar-right-search-container">
              <i className="fas fa-search" onClick={this.handleSearchInput}></i>
              <input className="navbar-search-input-hidden" type="text" placeholder="Titles..." onChange={this.handleSearch} value={this.searchQuery} onKeyDown={this.handleSearchEnter}></input>
            </div>
            {/* <Link className="navbar-right-link" to={"/browse"}>DVD</Link> */}
            {/* <img src={window.whiteBellIcon} height="35" width="35" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}/> */}
            <i className="fas fa-bell" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}></i>
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

export default withRouter(NavBar);