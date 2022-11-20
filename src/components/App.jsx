import { PageTitle } from './PageTitle/PageTitle';
import { SecondTitle } from './SecondTitle/SecondTitle';
import Form from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const formSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isExsist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExsist) {
      return alert(`${name} is already in contacts`);
    }

    setContacts([...contacts, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const makeFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const filterContacts = makeFilterContacts();

  return (
    <div className={css.container}>
      <PageTitle text={'Phonebook'} />
      <Form stateForm={formSubmit} />
      <SecondTitle text={'Contacts'} />
      <Filter value={filter} onFilter={changeFilter} />
      <ContactList
        contacts={filterContacts}
        onDeleteContacts={deleteContacts}
      />
    </div>
  );
}
