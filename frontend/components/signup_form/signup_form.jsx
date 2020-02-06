import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.requestedUser,
      password: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-page">
        <div className="signup-top-bar">
          <Link to="/" id="first-link-signup"><img className="bendy-logo-2" src={window.bendyLogo} width="120" height="74" /></Link>
          <a href="/#/login" onClick={this.props.clearErrors}>Sign In</a>
        </div>
        <div className="signup-border-bar">
          <form onSubmit={this.handleSubmit} className='signup-form'>
            <h1>Finish signup to start your free demo.</h1>
            <p className="signup-first-p">Just two more steps and you're done! We hate paperwork, too.</p>
            <h2>Create your account.</h2>
            <span className="signup-form-errors">{this.renderErrors()}</span>
            <input type="text" value={this.state.username} onChange={this.update('username')} placeholder={'Username'} />
            <br />
            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder={'Password'} />
            <br />
            <button type="submit" className="sign-up-form-button">CONTINUE</button>
          </form>
        </div>
      </div>
    )
  }
};

export default SignupForm;