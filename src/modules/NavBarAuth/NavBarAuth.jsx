import { NavLink } from 'react-router-dom';

import styles from './nav-bar-auth.module.scss';

const NavBarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>{' '}
      |
      <NavLink to="/login" className={styles.link}>
        {' '}
        Log in
      </NavLink>
    </div>
  );
};

export default NavBarAuth;
