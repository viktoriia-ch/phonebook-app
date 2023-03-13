import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import styles from './contact-list.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const contactList = filteredContacts.map(contact => {
    const handleRemoveContact = id => {
      dispatch(deleteContact(id));
      Notify.success('Contact deleted!');
    };

    return (
      <li key={contact.id} className={styles.item}>
        <span>
          {contact.name}: {contact.number}
        </span>

        <button
          className={styles.btn}
          onClick={() => handleRemoveContact(contact.id)}
          type="button"
        >
          delete
        </button>
      </li>
    );
  });

  return <ul className={styles.list}>{contactList}</ul>;
};

export default ContactList;
