import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav>
    <h1 className={styles.title}><Link className={styles.link} to="/">Bookstore</Link></h1>
    <ul className={styles.linkCont}>
      <li className={styles.linkEl}>
        <Link className={styles.link} to="/">Books</Link>
      </li>
      <li className={styles.linkEl}>
        <Link className={styles.link} to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
