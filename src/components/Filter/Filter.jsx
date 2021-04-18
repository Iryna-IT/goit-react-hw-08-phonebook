import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterOperations } from '../../redux/filter/';

import styles from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  render() {
    const { onSearch } = this.props;
    return (
      <form className={styles.form_search}>
        <label htmlFor="filter" className={styles.label_search}>
          Find contacts by name
        </label>
        <input
          type="text"
          name="filter"
          className={styles.input_search}
          placeholder="Enter the name"
          onChange={onSearch}
        ></input>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSearch: event =>
    dispatch(filterOperations.filterContacts(event.currentTarget.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
