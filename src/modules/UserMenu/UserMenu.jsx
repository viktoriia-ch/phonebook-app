import { useSelector } from 'react-redux';
import { userName } from 'redux/auth/auth-selectors';

import styles from './user-menu.module.css';

const UserMenu = () => {
  const name = useSelector(userName);
  return (
    <div className={styles.container}>
      <p>{name},</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
