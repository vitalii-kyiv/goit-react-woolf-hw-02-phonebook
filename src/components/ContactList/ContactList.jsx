import ContactListItem from 'components/ContactListItem/ContactListItemItem';
import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { getFilteredContacts, deleteContact } = this.props;
    return (
      <ul>
        {getFilteredContacts().map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
