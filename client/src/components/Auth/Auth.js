import styles from './Auth.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AuthForm from './AuthForm';

const AuthPage = ({
    authAction
}) => {

    useEffect(() => {

    }, [authAction]);

    return (
        <section className={styles.auth}>
            <div className={styles.tile}>
                <ul className={styles["tile__action"]}>
                    <li className={styles["tile__action__title"]}>
                        <Link className=
                        {authAction === 'login' 
                        ? styles["tile__action__title__active"] 
                        : styles["tile__action__title__inactive"]} 
                        to="/login">
                            Login
                            </Link>
                    </li>
                    <li className={styles["tile__action__title"] }>
                        <Link className=
                        {authAction === 'register' 
                        ? styles["tile__action__title__active"] 
                        : styles["tile__action__title__inactive"]} 
                        to="/register">
                        Register
                        </Link>
                    </li>
                </ul>
                <AuthForm authAction={authAction} />
            </div>
        </section>
    );
}

export default AuthPage;