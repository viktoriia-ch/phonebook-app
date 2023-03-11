// import styles from './register-form.module.css'
import useForm from 'shared/hooks/useForm';

import fields from './fields';
import TextField from 'shared/components/TextField/TextField';
import initialState from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={state.name}
        handleChange={handleChange}
        {...fields.name}
      />
      <TextField
        value={state.email}
        handleChange={handleChange}
        {...fields.email}
      />
      <TextField
        value={state.password}
        handleChange={handleChange}
        {...fields.password}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterForm;
