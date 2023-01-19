import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../../Button/Button';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.NavLink}>Home</NavLink>
        <NavLink to="/counter" className={styles.NavLink}>Counter</NavLink>
        <NavLink to="/login" className={styles.NavLink}>Login</NavLink>
        <NavLink to="/registration" className={styles.NavLink}>Registration</NavLink>
        <NavLink to="/login" className={styles.NavLink}>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('token');
            }}
          >
            Log out
          </button>

        </NavLink>

      </nav>
    );
  }
}

export default Navigation;
