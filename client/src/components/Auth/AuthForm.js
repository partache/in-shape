import { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = ({
    authAction
}) => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name] : e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values)
        //let values = Object.fromEntries(new FormData(e.target));
    };

    return(
        <>
        <p className={styles.title}>{authAction === 'login'? 'Login your profile': 'Register a profile'}</p>
        <form className={styles.form} onSubmit={submitHandler}>
            <input 
            className={styles["form__input"]} 
            placeholder="E-mail"
            onChange={changeHandler}
            value={values.email}
            />
            <input className={styles["form__input"]} 
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
            />
            <button className={styles["form__btn"]}
             disabled={!values.email || !values.password }>
                {authAction === 'login'? 'Login': 'Register'}
            </button>
        </form>
        </>
    )
};

export default AuthForm;