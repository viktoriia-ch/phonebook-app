import useForm from 'shared/hooks/useForm';
import Title from 'shared/components/Title/Title';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import fields from './fields';
import initialState from './initialState';

import styles from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Title text="Login page" />
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
      <Button type="submit" text="Login" />
    </form>
  );
};

export default LoginForm;
