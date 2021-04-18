import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import Filter from './Filter';
import ContactList from '../components/ContactList';

import { contactsSelectors } from '../redux/contacts';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

export default connect(mapStateToProps, null)(App);
