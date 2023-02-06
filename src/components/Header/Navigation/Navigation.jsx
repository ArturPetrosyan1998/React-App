import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from '../../../context/AuthContext';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <Consumer>
        {({ handleLogout }) => (

          <nav className={styles.nav}>
            <NavLink to="/" className={styles.NavLink}>Home</NavLink>
            <NavLink to="/counter" className={styles.NavLink}>Counter</NavLink>
            <NavLink to="/login" className={styles.NavLink}>Login</NavLink>
            <NavLink to="/registration" className={styles.NavLink}>Registration</NavLink>
            <NavLink to="/users" className={styles.NavLink}>Users</NavLink>
            <NavLink to="/posts" className={styles.NavLink}>Posts</NavLink>
            <NavLink
              to="/login"
              className={styles.NavLink}
              type="button"
              onClick={handleLogout}
            >
              Log out
            </NavLink>
          </nav>
        )}
      </Consumer>
    );
  }
}

export default Navigation;
