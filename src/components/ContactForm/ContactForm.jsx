import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  onInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const trimName = name.trim();

    this.props.onFormSubmit({ name: trimName, number, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            onChange={this.onInputChange}
            type="text"
            id={this.nameInputId}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.telInputId}>
          Number
          <Input
            onChange={this.onInputChange}
            type="tel"
            id={this.telInputId}
            name="number"
            value={number}
            pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
