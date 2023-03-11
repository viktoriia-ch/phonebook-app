import styles from './register-form.module.css';
import useForm from 'shared/hooks/useForm';
import Title from 'shared/components/Title/Title';
import fields from './fields';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';
import initialState from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Title text="Register page" />
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
      <Button type="submit" text="Register" />
    </form>
  );
};

export default RegisterForm;
