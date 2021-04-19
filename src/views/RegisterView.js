import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

import styles from './Views.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <h1>Registration Page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <span className={styles.headline}>Name</span>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              placeholder="Jon Howard"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.headline}>email</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="jhovard@gmail.com"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.headline}>login</span>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              pattern=".{7,}"
              title="Must contain at least 7 or more characters"
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={styles.btn}>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
