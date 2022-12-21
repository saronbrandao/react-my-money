import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import NavButton from './UI/NavButton';

import styles from './NavBar.module.css';

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li className="btn" onClick={logout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
