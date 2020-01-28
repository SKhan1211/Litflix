import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
      <div className='login-page'>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign In</h1>
          <p>Sign in to start watching or restart your membership</p>
          {this.renderErrors()}
          <input type="text" value={this.state.username} onChange={this.update('username')} placeholder={'Username'}/>
          <br />
          <input type="password" value={this.state.password} onChange={this.update('password')} placeholder={'Password'} />
          <br />
          <button>Sign In</button>
          <br />
          <input type="checkbox"/>Remember me
          <a href="#">Need help?</a>
          <br />
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_1280.png" alt="Facebook Logo" style={{width: 20}}/>
            <span>Login With Facebook</span>
          </div>
          <p><b>New to Litflix?</b></p>
          <p>No ads. Watch anywhere. Cancel anytime.</p>
          <button>Try 30 days free ></button>
        </form>
      </div>
    )
  }
};

export default LoginForm;