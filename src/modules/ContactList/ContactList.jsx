import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlinePhone } from 'react-icons/ai';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import styles from './contact-list.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const contactList = filteredContacts.map(contact => {
    const handleRemoveContact = id => {
      dispatch(deleteContact(id));
    };

    return (
      <li key={contact.id} className={styles.item}>
        <p className={styles.marker}>
          <AiOutlinePhone className={styles.icon} />
        </p>
        <span>
          {contact.name}: {contact.number}
        </span>

        <button
          className={styles.btn}
          onClick={() => handleRemoveContact(contact.id)}
          type="button"
        >
          <AiOutlineDelete className={styles.icon} />
        </button>
      </li>
    );
  });

  return <ul className={styles.list}>{contactList}</ul>;
};

export default ContactList;
