import React, { Component } from 'react';
import LoginService from '../services/LoginService';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    LoginService.loginUser(username, password)
      .then((response) => {
       
        this.props.history.push('/profiles');
        window.location.reload();
      })
      .catch((error) => {
        
        this.setState({ loginError: true });
      });
  };

  render() {
    const { username, password, loginError } = this.state;
    return (
      <div>
        <h2>Login</h2>
        {loginError && <p className="error-message">Invalid credentials. Please try again.</p>}
        <form onSubmit={this.handleLogin}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
