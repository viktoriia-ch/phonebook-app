import ContactForm from 'modules/ContactForm/ContactForm';
import Filter from 'modules/Filter/Filter';
import ContactList from 'modules/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <div>
      <div>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
