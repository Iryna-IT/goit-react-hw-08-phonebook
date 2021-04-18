import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import styles from '../AppBar/AppBar.module.css';

class Navigation extends Component {
  render() {
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated);
    return (
      <nav>
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
//   <nav>
//     {/* <NavLink
//       to="/"
//       exact
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       Home
//     </NavLink> */}

//     {isAuthenticated && (
//       <NavLink
//         to="/contacts"
//         exact
//         className={styles.link}
//         activeClassName={styles.activeLink}
//       >
//         Contacts
//       </NavLink>
//     )}
//   </nav>
// );

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
