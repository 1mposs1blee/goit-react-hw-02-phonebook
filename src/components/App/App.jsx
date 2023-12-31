import { Component } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {
  Wrapper,
  MainTitle,
  ContactsTitle,
  MessageNotFound,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onContactFormSubmit = contact => {
    const { name: newContactName } = contact;
    const { contacts } = this.state;

    if (contacts.find(({ name }) => name === newContactName)) {
      alert(`${newContactName} is already in contacts`);

      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onChangeFilterInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  onClickButtonDelete = id => {
    this.setState(({ contacts }) => {
      const contactsWithoutDeleted = contacts.filter(
        ({ id: contactId }) => contactId !== id
      );

      return { contacts: [...contactsWithoutDeleted] };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Wrapper>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onFormSubmit={this.onContactFormSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter
          onChangeFilterInput={this.onChangeFilterInput}
          filter={filter}
        />
        {filteredContacts.length > 0 ? (
          <ContactList
            onClickButtonDelete={this.onClickButtonDelete}
            contacts={filteredContacts}
          />
        ) : (
          <MessageNotFound>No contacts found</MessageNotFound>
        )}
      </Wrapper>
    );
  }
}
