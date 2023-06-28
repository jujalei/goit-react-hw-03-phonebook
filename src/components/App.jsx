import { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';

import { Wrapper, MainTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = data => {
    for (const contact of this.state.contacts) {
      if (data.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${contact.name} "is already in contacts"`);
        return;
      }
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  handleSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleFilterClear = () => {
    this.setState({ filter: '' });
  };

  getContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );

    if (filterContact.length === 0) {
      return contacts;
    }

    return filterContact;
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stringifiedContacts) ?? [];

    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Wrapper>
        <MainTitle>Phone book</MainTitle>
        <ContactForm onForm={this.handleSubmit} />
        <ContactList
          contacts={this.getContact()}
          onDelete={this.deleteContact}
          searchName={this.state.filter}
          onSearch={this.handleSearch}
          clearFilter={this.handleFilterClear}
        />
      </Wrapper>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
