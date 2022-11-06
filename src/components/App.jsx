import { PageTitle } from './PageTitle/PageTitle';
import { SecondTitle } from './SecondTitle/SecondTitle';
import Form from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = data => {
    const { name, number } = data;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isExsist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExsist) {
      return alert(`${name}is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  makeFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filterContacts = this.makeFilterContacts();

    return (
      <div className={css.container}>
        <PageTitle text={'Phonebook'} />
        <Form stateForm={this.formSubmit} />
        <SecondTitle text={'Contacts'} />
        <Filter value={this.state.filter} onFilter={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}

export default App;
