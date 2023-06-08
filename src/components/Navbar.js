import { BiMath } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Calcrouter', text: 'Calculator' },
  { path: 'Quoterouter', text: 'Quotes' },
];

const Navbar = () => (
  <nav className={styles.navbar}>
    <span className={styles.mathtitle}>
      <BiMath color="orangered" />
      {' '}
      Math Magiciens
    </span>
    <ul className={styles.navList}>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            to={link.path}
            className={styles.navLink}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
