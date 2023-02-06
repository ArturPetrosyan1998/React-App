import { Component } from 'react';
import imgHamburger from './assets/icons/hamburger.png';
import Navigation from './Navigation/Navigation';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    const { isOpenAside, ...rest } = this.props;
    return (

      <header className={rest.className}>
        <div className={styles.container}>
          <img src={imgHamburger} alt="hamburger" onClick={isOpenAside} />
          <Navigation />
        </div>
      </header>

    );
  }
}

export default Header;
