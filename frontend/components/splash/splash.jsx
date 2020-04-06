import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedUser: this.props.requestedUser,
      showProjects: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.viewProjects = this.viewProjects.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  };

  handleClick(e) {
    this.props.receiveRequestedUser(this.state.requestedUser);
  }

  loginDemoUser() {
    this.props.demoLogin({
      username: 'username',
      password: 'hunter12'
    });
  }

  viewProjects(event) {
    event.preventDefault();
    if (this.state.showProjects) {
      this.setState({ showProjects: false });
      const li = document.getElementsByClassName("ul-li-last-li")[0];
      document.getElementById("ul-li-last-section").style.display = "none";
      document.getElementById("ul-li-transform-plus").id = "ul-li-transform"
      li.className = "ul-li-last-li-hidden";
    } 
    else if (!this.state.showProjects) {
      this.setState({ showProjects: true });
      const li = document.getElementsByClassName("ul-li-last-li-hidden")[0];
      document.getElementById("ul-li-last-section").style.display = "flex";
      document.getElementById("ul-li-transform").id = "ul-li-transform-plus"
      li.className = "ul-li-last-li";
    }
  }

  render() {
    return (
      <div className="main-container">
          <img src={window.bendyLogo} id="first-logo-splash" />
        <section className="container-1">
          <img src={window.background} height="977" width="1450"/>
          <div className="splash-buttons-div">
            <div className="splash-sign-in-div">
              <Link to="/login" className="splash-sign-in">Sign In</Link>
            </div>
            <div className="splash-demo-div"> 
              <Link to="/" className="splash-demo-link" onClick={this.loginDemoUser}>Demo</Link>
            </div>
          </div>
          <div className="container-1-main">
            <h2>Unlimited movies, TV shows, and more.</h2>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <div className="signup-field">
              <input type="text" placeholder={"Username" || this.state.requestedUser} onChange={this.update('requestedUser')}/>
              <Link to={"/signup"} className="signup-link" onClick={this.handleClick}>SIGN UP NOW ></Link>
            </div>
            <p>Ready to watch? Enter a username to create or access your account</p>
          </div>
        </section>
        <section className="container-2">
          <div className="container-2-main">
            <div className="container-2-text">
              <h2>Enjoy on your TV.</h2>
              <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
            </div>
            <div className="tv-story-card">
              <img src={window.netflixTVImg} alt="TV story card"/>
              <div className="video-story-card">
                <video autoPlay loop playsInline muted>
                  <source src="https://netflix-clone-pro.s3.us-east-2.amazonaws.com/netflix-assets/netflix-video-1.m4v" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="container-3">
          <div className="container-3-main">
            <div className="phone-boxing">
              <div className="phone-img">
                <img src={window.phone} height="360" width="490" />
              </div>
              <div className="phone-cover">
                <img className="cover-photo" src={window.netflixCover} height="85" width="60"/>
                <div className="cover-text">
                  <h6>Stranger Things</h6>
                  <p>Downloading...</p>
                </div>
                <img className="cover-spinner" src={window.downloadSpinner} />
              </div>
            </div>
            <div className="container-3-text">
              <h2>Download your shows to watch on the go.</h2>
              <h3>Save your data and watch all of your favorites offline.</h3>
            </div>
          </div>
        </section>
        <section className="container-4">
          <div className="container-4-main">
            <div className="container-4-text">
              <h2>Watch everywhere.</h2>
              <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
            </div>
            <div className="container-4-card">
              <img src={window.netflixMonitorImg} alt="Mac story card" />
              <div className="video-story-card2">
                <video autoPlay loop playsInline muted>
                  <source src="https://netflix-clone-pro.s3.us-east-2.amazonaws.com/netflix-assets/netflix-video-2.m4v" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="container-5">
          <div className="container-5-main">
            <h2>About the Developer</h2>
            <ul className="ul-li-list">
              <li><div><p>Full-Stack Software Engineer</p><span>&lt;</span></div></li>
              <li><div><p>React, Redux, GraphQL, JavaScript, MongoDB, Ruby on Rails, and more!</p><span>&lt;</span></div></li>
              <li><a className="ul-li-hover" target="_blank" href="https://www.linkedin.com/in/thesuhaibkhan/"><p><i class="fab fa-linkedin"></i>LinkedIn</p><span>&lt;</span></a></li>
              <li><a className="ul-li-hover" target="_blank" href="https://github.com/SKhan1211"><p><i class="fab fa-github"></i>Github</p><span>&lt;</span></a></li>
              <li><a className="ul-li-hover" target="_blank" href="https://www.thesuhaibkhan.com"><p><i class="fas fa-user"></i>Personal Site</p><span>&lt;</span></a></li>
              <li><a className="ul-li-hover" onClick={this.viewProjects} target="_blank" href="#"><p>View my other projects</p><span id="ul-li-transform">+</span></a></li>
              <li className="ul-li-last-li-hidden">
                <section id="ul-li-last-section">
                  <a href="https://openstableapp.herokuapp.com/#/" target="_blank">
                    <p>OpenStable</p><p className="ul-li-2nd-p">A reservation booking platform for horse tours inspired by OpenTable. Implemented with the MERN stack and GraphQL</p>
                    <img width="400" src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/d1/1127338/1152415ced097f95d174db7ce8d7107d-original.png"></img>
                  </a>
                  <a href="https://whooopwhooop.herokuapp.com/#/" target="_blank">
                    <p>Whoop</p><p className="ul-li-2nd-p">A website based on Yelp where users can find, rate, and review restaurants. Created with React.js, Redux, and MongoDB</p>
                    <img width="400" src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/16/1127342/8750c200ed1921c670b4bb3ddc48d8bb-original.png"></img>
                  </a>
                  <a href="https://skhan1211.github.io/Flextris/dist/index.html" target="_blank">
                    <p>Flextris</p><p className="ul-li-2nd-p">A full interactive version of Tetris. Designed in JavaScript, displayed with HTML5 Canvas, and bundled with Webpack	 </p>
                    <img width="400" src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1127345/6c6ef26221c06c739c66db6f822900d5-original.png"></img>
                  </a>
                </section>
              </li>
            </ul>
            <div className="signup-field2">
              <input type="text" placeholder={"Username" || this.state.requestedUser} onChange={this.update('requestedUser')}/>
              <Link to={"/signup"} className="signup-link2" onClick={this.handleClick}>SIGN UP NOW ></Link>
            </div>
            <p>Ready to watch? Enter a username to create or access your account</p>
          </div>
        </section>
        <section className="container-6">
          {/* for footer number add binary numbers 0-101-010-1010 */}
        </section>
      </div>
    )
  };
};

export default Splash;