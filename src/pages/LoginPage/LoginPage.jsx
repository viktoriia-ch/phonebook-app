import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { login } from 'redux/auth/auth-operations';
import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
