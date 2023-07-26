import React, { Component } from 'react';
import RegistrationService from '../services/RegistrationService';
class RegistrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      registrationError: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegistration = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword } = this.state;

    
    if (password !== confirmPassword) {
      this.setState({ registrationError: true });
      return;
    }

    
    RegistrationService.registerUser(username, password)
      .then((response) => {
        
        this.props.history.push('/login');
        window.location.reload();
      })
      .catch((error) => {
       
        this.setState({ registrationError: true });
      });
  };

  render() {
    const { username, password, confirmPassword, registrationError } = this.state;
    return (
      <div>
        <h2>Registration</h2>
        {registrationError && <p className="error-message">Registration failed. Please try again.</p>}
        <form onSubmit={this.handleRegistration}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationComponent;
