import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin } from 'redux/auth/auth-selectors';
import NavBarAuth from 'modules/NavBarAuth/NavBarAuth';
import UserMenu from 'modules/UserMenu/UserMenu';
import styles from './navbar.module.css';

const NavBar = () => {
  const isUserLogin = useSelector(isLogin);
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={styles.link}>
        Contacts
      </NavLink>
      {!isUserLogin && <NavBarAuth />}
      {isUserLogin && <UserMenu />}
    </div>
  );
};

export default NavBar;
