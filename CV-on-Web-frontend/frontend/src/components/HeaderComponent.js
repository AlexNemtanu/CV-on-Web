import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.props.history.push('/login');
    window.location.reload();
  }
  handleRegister() {
    this.props.history.push('/register');
    window.location.reload();
  }
  handleLogout() {
    
    localStorage.removeItem('token');
    this.props.history.push('/');
    window.location.reload();
  }

  render() {
    const loggedIn = !!localStorage.getItem('token');
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="http://localhost:3000" className="navbar-brand">
                CV Generator App
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button className="nav-link" onClick={this.handleLogin}>
                    <i className="fas fa-user-circle"></i> Login
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={this.handleRegister}>
                    <i className="fas fa-user-circle"></i> Register
                  </button>
                </li>
                {loggedIn && (
                <li className="nav-item">
                  <button className="nav-link btn" onClick={this.handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              )}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default withRouter(HeaderComponent);
