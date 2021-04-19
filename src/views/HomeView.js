import React, { Component } from 'react';

import styles from './Views.module.css';

class HomeView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Welcome to phonebook!</h1>
      </div>
    );
  }
}

export default HomeView;
