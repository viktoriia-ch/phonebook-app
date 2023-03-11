// import styles from './register-page.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import RegisterForm from 'modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h2>Register page</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
