import { NavLink } from 'react-router-dom';

import styles from './nav-bar-auth.module.css';

const NavBarAuth = () => {
  return (
    <>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>{' '}
      |
      <NavLink to="/login" className={styles.link}>
        {' '}
        Log in
      </NavLink>
    </>
  );
};

export default NavBarAuth;
