import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FormWrap, FormInput, FormBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    phone: '',
    name: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.phone,
    };
    this.props.onForm(contact);

    this.setState({
      phone: '',
      name: '',
    });
  };

  render() {
    return (
      <FormWrap>
        <label>
          <div>Name</div>
          <FormInput
            onChange={this.handleInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <div>Number</div>

          <FormInput
            onChange={this.handleInputChange}
            type="tel"
            id="phone"
            name="phone"
            value={this.state.phone}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
          />
        </label>
        <FormBtn type="submit" onClick={this.handleSubmitForm}>
          Add contact
        </FormBtn>
      </FormWrap>
    );
  }
}

ContactForm.propTypes = {
  onForm: PropTypes.func.isRequired,
};
