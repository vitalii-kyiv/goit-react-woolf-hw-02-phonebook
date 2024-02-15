import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = data => {
    console.log(this.state)
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    console.log(contact);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    this.addContact(this.state);
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state);
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'left',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <label>
          Find contacts by name
          <input onChange={this.handleChange} type="search" name="filter" value={this.state.filter} />
          </label>
          {/* <ul>
            {this.getFilteredContacts().map(contact => (
            <li key={contact.id}>
              <p>{contact.name}:{contact.number}</p>
            </li>
            ))
            }
          </ul> */}
                <ul>
          {this.getFilteredContacts().map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}:{contact.number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
