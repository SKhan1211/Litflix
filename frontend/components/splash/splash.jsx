import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.requestedUser;

    this.handleClick = this.handleClick.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  };

  handleClick(e) {
    this.props.receiveRequestedUser(this.state.requestedUser);
  }

  render() {
    return (
      <div className="main-container">
          <img src={window.bendyLogo} id="first-logo-splash" />
        <section className="container-1">
          <img src={window.background} height="977" width="1450"/>
          <div className="splash-sign-in-div"> 
            <Link to="/login" className="splash-sign-in">Sign In</Link>
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
            <h2>Frequently Asked Questions</h2>
            <ul className="ul-li-list">
              <li><button><p>What is Litflix?</p><span>+</span></button></li>
              <li><button><p>How much does Litflix cost?</p><span>+</span></button></li>
              <li><button><p>Where can I watch?</p><span>+</span></button></li>
              <li><button><p>How do I cancel?</p><span>+</span></button></li>
              <li><button><p>What can I watch on Litflix?</p><span>+</span></button></li>
              <li><button><p>How does the free trial work?</p><span>+</span></button></li>
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