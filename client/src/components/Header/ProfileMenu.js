import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

import styles from './ProfileMenu.module.css'

const ProfileMenu = () => {
    const { user } = useContext(UserContext);

    return (
        <nav className={styles["profile-menu"]}>

            {user.email
                ?
                <>
                    <Link className={styles["profile-menu__item"]} to="/logout">Logout</Link>
                    <Link className={styles["profile-menu__item"]} to="/my-items">My items</Link>
                    <Link className={styles["profile-menu__item"]} to="/catalog/create">Create</Link>
                </>
                :
                <>
                    <Link className={styles["profile-menu__item"]} to="/login">Login</Link>
                    <Link className={styles["profile-menu__item"]} to="/register">Register</Link>
                </>
            }
        </nav>
    );
}

export default ProfileMenu;