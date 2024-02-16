import React, { Component } from 'react';

class ContactListItem extends Component {
  render() {
    const { contact, deleteContact } = this.props;
    return (
      <li>
        <p>
          {contact.name}:{contact.number}
        </p>
        <button onClick={() => deleteContact(contact.id)}>delete</button>
      </li>
    );
  }
}

export default ContactListItem;
