import useForm from 'shared/hooks/useForm';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
import initialState from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
