import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { contactsSelectors, contactsOperations } from '../redux/contacts';

import styles from './Views.module.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.container}>
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

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

// export default connect(mapStateToProps, null)(ContactsView);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
