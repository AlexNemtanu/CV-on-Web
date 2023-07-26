import React, { Component } from 'react';
import styles from './HomeComponent.module.css';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.aboutUs = this.aboutUs.bind(this);
  }

  aboutUs() {
    this.props.history.push('/about-us');
    window.location.reload();
  }

  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['row', 'home-container']}>
          <div className={styles['col-md-6', 'left-side']}>
            <div className={styles['left-side-content']}>
              <h2>A simple way to create a CV</h2>
              <p>
                CV on Web is a project created to provide a modern and interactive way of personal presentation.
                This is a website that serves as a cv generator. You must log in or register to use our generator.
              </p>
              <button className={styles['btn', 'btn-primary']} onClick={this.aboutUs}>
                About Us
              </button>
            </div>
          </div>
          <div className={styles['col-md-6', 'right-side']}>
            <img
              src={process.env.PUBLIC_URL + '/cv.png'}
              alt="CV Generator App"
              style={{ width: '400px', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
