const fields = {
  name: {
    label: 'Name',
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    required: true,
    placeholder: 'enter name...',
  },

  number: {
    label: 'Number',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    type: 'tel',
    name: 'number',
    pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    required: true,
    placeholder: 'enter number...',
  },
};

export default fields;
