import styles from './ProfileMenu.module.css'

const ProfileMenu = () => {
    return (
        <ul className={styles["profile-menu"]}>
            <li className={styles["profile-menu__item"]}>Login</li>
            <li className={styles["profile-menu__item"]}>Register</li>
            <li className={styles["profile-menu__item"]}>My items</li>
        </ul>
    );
}

export default ProfileMenu;