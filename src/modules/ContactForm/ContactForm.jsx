import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Title from 'shared/components/Title/Title';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import {
  fetchContacts,
  addContact,
} from '../../redux/contacts/contacts-operations';
import fields from './fields';

import styles from './contact-form.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    const result = dispatch(addContact({ name, number }));
    return result;
  };

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ name, number }).then(
      response =>
        response.type === 'contacts/addContact/fulfilled' && resetForm()
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Title text="Phonebook" />
      <TextField onChange={handleChangeName} value={name} {...fields.name} />
      <TextField
        onChange={handleChangeNumber}
        value={number}
        {...fields.number}
      />
      <Button type="submit" text="Add contact" />
    </form>
  );
};

export default ContactForm;
