import styles from './Login.module.css';

export const LoginPage = () => {
    return (
        <section className={styles.login}>
            <span className={styles.logo}>
                <p>InShape</p>
            </span>
            <div className={styles.tile}>
            <ul className={styles["tile__action"]}>
                <li className={styles["tile__action__title"]}>
                    Login
                </li>
                <li className={styles["tile__action__title"]}>
                    Register
                </li>
            </ul>
            <p className={styles.title}>Login your profile</p>
            <form className={styles.form}>
                <input className={styles["form__input"]} placeholder="E-mail"></input>
                <input className={styles["form__input"]} placeholder="Password"></input>
                <button className={styles["form__btn"]}>Login</button>
            </form>
            </div>
        </section>
);
}