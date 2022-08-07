import styles from './LoginAndRegister.module.css';

const Login = () => {
    return(
        <form className={styles.form}>
            <input className={styles["form__input"]} placeholder="E-mail"></input>
            <input className={styles["form__input"]} placeholder="Password"></input>
            <button className={styles["form__btn"]}>Login</button>
        </form>
    )
};

export default Login;