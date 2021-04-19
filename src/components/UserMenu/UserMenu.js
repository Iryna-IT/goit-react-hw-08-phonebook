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
        <div className={styles.user}>
          <img src={avatar} alt="avatar" width="32" className={styles.avatar} />
          <span className={styles.name}>{name}</span>
        </div>
        <button className={styles.btn} type="button" onClick={onLogout}>
          LogOut
        </button>
      </div>
    );
  }
}

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div className={styles.container}>
//   <div className={styles.user}>
//     <img src={avatar} alt="avatar" width="32" className={styles.avatar} />
//     <span className={styles.name}>{name}</span>
//   </div>
//   <button className={styles.btn} type="button" onClick={onLogout}>
//     LogOut
//   </button>
// </div>
// );

const mapStateToProps = state => ({
  name: authSelectors.getUserEmail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
