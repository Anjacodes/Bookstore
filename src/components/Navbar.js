import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import user from '../images/user.svg';

const Navbar = () => (
  <nav className={styles.navCont}>
    <div className={styles.linkCont}>
      <h1><Link className={styles.titleLink} to="/">Bookstore CMS</Link></h1>
      <ul className={styles.linkCont}>
        <li className={styles.linkEl}>
          <Link className={styles.link} to="/">BOOKS</Link>
        </li>
        <li className={styles.linkEl}>
          <Link className={styles.link} to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <img className={styles.user} alt="user account logo" src={user} />
  </nav>
);

export default Navbar;
