import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import styles from './user-menu.module.scss';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{name},</p>
      <button onClick={onLogout} type="button" className={styles.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
