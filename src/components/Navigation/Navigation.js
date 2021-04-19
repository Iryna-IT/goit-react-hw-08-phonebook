import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import styles from '../AppBar/AppBar.module.css';

class Navigation extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className={styles.nav}>
        {isAuthenticated && (
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        )}
      </nav>
    );
  }
}

// const Navigation = ({ isAuthenticated }) => (
{
  /* <nav className={styles.nav}>
  {isAuthenticated && (
    <NavLink
      to="/contacts"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Contacts
    </NavLink>
  )}
</nav>; */
}
// );

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
