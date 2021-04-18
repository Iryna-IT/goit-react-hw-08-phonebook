import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { authSelectors } from '../../redux/auth';

import styles from './AppBar.module.css';

class AppBar extends Component {
  render() {
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated);
    return (
      <header className={styles.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    );
  }
}

// const AppBar = ({ isAuthenticated }) => (
//   <header className={styles.header}>
//     <Navigation />
//     {isAuthenticated ? <UserMenu /> : <AuthNav />}
//   </header>
// );

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
