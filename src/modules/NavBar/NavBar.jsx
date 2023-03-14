import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiSmartphone } from 'react-icons/fi';

import { isLogin } from 'redux/auth/auth-selectors';
import NavBarAuth from 'modules/NavBarAuth/NavBarAuth';
import UserMenu from 'modules/UserMenu/UserMenu';

import styles from './navbar.module.scss';

const NavBar = () => {
  const isUserLogin = useSelector(isLogin);
  return (
    <div className={styles.container}>
      <div className={styles.nav_block}>
        <NavLink to="/" className={styles.logo}>
          <FiSmartphone className={styles.icon} />
        </NavLink>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        {isUserLogin && (
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
        )}
      </div>
      {isUserLogin && <UserMenu />}
      {!isUserLogin && <NavBarAuth />}
    </div>
  );
};

export default NavBar;
