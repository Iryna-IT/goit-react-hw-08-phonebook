import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../AppBar/AppBar.module.css';

class AuthNav extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavLink
          to="/register"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Registration
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          LogIn
        </NavLink>
      </div>
    );
  }
}

// const AuthNav= () => (
//  <div className={styles.container}>
//    <NavLink
//      to="/register"
//      exact
//      className={styles.link}
//      activeClassName={styles.activeLink}
//    >
//      Registration
//    </NavLink>
//    <NavLink
//      to="/login"
//      exact
//      className={styles.link}
//      activeClassName={styles.activeLink}
//    >
//      LogIn
//    </NavLink>
//  </div>;
// );

export default AuthNav;
