import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import styles from './UserMenu.module.css';

class UserMenu extends Component {
  render() {
    const { avatar, name, onLogout } = this.props;
    return (
      <div className={styles.container}>
        <img src={avatar} alt="avatar" width="32" className={styles.avatar} />
        <span className={styles.name}>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    );
  }
}

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div className={styles.container}>
//     <img src={avatar} alt="avatar" width="32" className={styles.avatar} />
//     <span className={styles.name}>Welcome, {name}</span>
//     <button type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
