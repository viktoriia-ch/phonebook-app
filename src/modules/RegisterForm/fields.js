const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    placeholder: 'enter name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'enter email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'enter password',
  },
};

export default fields;
