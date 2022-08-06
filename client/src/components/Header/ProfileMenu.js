import {Link} from 'react-router-dom';
import styles from './ProfileMenu.module.css'

const ProfileMenu = () => {
    return (
        <nav className={styles["profile-menu"]}>
            <Link className={styles["profile-menu__item"]} to="/login">Login</Link>
            <Link className={styles["profile-menu__item"]} to="/register">Register</Link>
            <Link className={styles["profile-menu__item"]} to="/logout">Logout</Link>
            <Link className={styles["profile-menu__item"]} to="/my-items">My items</Link>
        </nav>
    );
}

export default ProfileMenu;