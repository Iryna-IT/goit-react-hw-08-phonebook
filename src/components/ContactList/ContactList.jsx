import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import styles from './ContactList.module.css';

class ContactList extends Component {
  static defaultProps = {
    existContacts: [],
  };

  static propTypes = {
    existContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDelete: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { existContacts } = this.props;
    const { onDelete } = this.props;
    if (existContacts.length === 0) {
      return <div>There are no contacts</div>;
    } else {
      return (
        <ul className={styles.contact_list}>
          {existContacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          ))}
        </ul>
      );
    }
  }
}

class Contact extends Component {
  static defaultProps = {
    id: '',
    name: '',
    number: '',
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
  };

  handleDelete = e => {
    const { onDelete } = this.props;
    const contactId = e.target.parentNode.id;
    onDelete(contactId);
  };

  render() {
    const { id, name, number } = this.props;
    return (
      <li className={styles.contact_item} id={id}>
        {' '}
        {name} : {number}
        <button
          type="button"
          className={styles.btn_delete}
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  existContacts: contactsSelectors.getContactsListToShow(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: contactId => dispatch(contactsOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
