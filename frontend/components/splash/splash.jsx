import React from 'react';

class Splash extends React.Component {
  render() {
    return (
      <div className="main-container">
        <section className="container-1">
          <img src={window.background} height="977" width="1450"/>
          <div className="splash-sign-in-div"> 
            <button className="splash-sign-in" onClick={null}>Sign In</button>
          </div>
          <div className="container-1-main">
            <h2>Unlimited movies, TV shows, and more.</h2>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <div className="signup-field">
              <input type="text" placeholder={"Username"}/>
              <button onClick={null}>TRY DEMO FREE</button>
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
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV story card"/>
              <div className="video-story-card">
                <video autoPlay loop playsInline muted>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4" />
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
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="Mac story card" />
              <div className="video-story-card2">
                <video autoPlay loop playsInline muted>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="container-5"></section>
        <section className="container-6"></section>
      </div>
    )
  };
};

export default Splash;