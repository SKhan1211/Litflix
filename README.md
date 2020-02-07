# README

![Logo](/documentation/images/LogoMakr_bendy.png "Litflix Logo")

## *[Link to Litflix](https://litflix.herokuapp.com/#/)*

### Brief Overview

Litflix is a clone of the popular video streaming website Netflix. Litflix allows members to stream unlimited video content with a variety of genres to choose from. In our clone version, videos are trailers of popular movies. Litflix was built using a number of tools, including:
* **Ruby on Rails** as a backend web framework
* **React/Redux** for the frontend interface
* **PostgresSQL** for database management
* **Amazon AWS S3** for hosting media

![Browse Page](/documentation/images/browse-page-screen.png "Litflix browse page")

### Features

* User authentication on both the backend and frontend using session tokens and bootstrapping the user with protected/auth routes
* Ability to watch videos when clicking on either the video title card or video preview
* Ability to hover over a video and see a small preview player of the video

### Ability to Sign Up, Sign In, and Log Out

![Signin Signup Feature](/documentation/images/login-logout-feature.png "Signin Signup Feature")

* Working authorization and validations for signing in and signing out
* After signing in, if you close the tab and go back to page you will still be signed in unless log out beforehand due to boostrapping

User auth is handled on the backend with validations and password hashing.

```
validates :username, :password_digest, :session_token, presence: true
validates :username, uniqueness: true
validates :password, length: { minimum: 6, allow_nil: true }
```

Actions are used to dispatch the current user to the store, essentially bootstrapping the user unless they specifically sign out.

```
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
```

### Hovering Over Videos 

![Video Hover Feature](/documentation/images/video-hover-feature.png "Video Hover Feature")

* When hovering over a video for a specific amount of time, a preview of the video will begin playing on the page
* The hover video feature is responsive and won't fire a bunch of video previews if you move your mouse around too fast
* When moving the mouse back off the hovered video, the video will close

Rather than having the video hover feature fire as soon as the user hovers on the video, a set timeout was used to create some delay so that when the user is moving the mouse around, videos won't begin just showing up.

```
handleOnHover(event) {
    window.timeout = null;
    if (!this.state.isHovered) {
      this.setState({ isHovered: true });
      event.persist();
      timeout = setTimeout(() => {
        event.target.parentElement.children[2].className = "mini-video-player"
      }, 700)
    }
  }
```

Making hovering videos brings challenges due to responsiveness. Simple mouse enter on image and mouse leave on the video events aren't enough. The user could quickly move their mouse around in fast succession and fire up the hover callback while messing up the current state. This was handled with a mouse leave event on both the video and image.

```
handleOffHover(event) {
    clearTimeout(timeout)
    if (this.state.isHovered) {
      this.setState({ isHovered: false, currentMovie: {} })
      event.currentTarget.className = "mini-video-player-blank";
    }
  }

clear(event) {
  clearTimeout(timeout)
  if (event.target.parentElement.children[2].className !== 'mini-video-player') {
    this.setState({ isHovered: false})
  }
}
```

### Watch Page for Each Video

![Show Video Feature](/documentation/images/video-show-feature.png "Show Video Feature")

* When clicking on a video title card or video preview, the video will show to the dimensions of your current screen
* Video controls will then become available on the watch page for the video
* The video will play automatically

In order to implement the watch feature, ownProps was used to grab the video ID from the browser and show the correct video.

```
const mapStateToProps = (state, ownProps) => ({
  movie: state.movies,
  id: ownProps.match.params.mediaId
});
```

Each video also has an arrow and text to go back to the browse page. This was implemented using CSS, opacity, and the hover pseudo-selector.

```
.watch-link-browse {
  z-index: 1;
  position: absolute;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 3%;
  left: 2%;
  opacity: 0;
}

.watch-link-browse:hover {
  z-index: 1;
  position: absolute;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 3%;
  left: 2%;
  opacity: 1;
}
```

