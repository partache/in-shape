import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import styles from './AuthForm.module.css';
import { login, register } from '../../services/AuthService';
import { UserContext } from '../../contexts/userContext';

const AuthForm = ({
    authAction
}) => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        rePass: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);

        if(authAction === 'register' && values.password !== values.rePass){
            return;
        }

        const { email, password } = values;
        const withoutRePass = { email, password };
       
        if (authAction === 'login') {
            login(withoutRePass)
                .then(authData => {
                    console.log(authData);
                    userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/404');
                });
        } else if (authAction === 'register') {
            
            register(withoutRePass)
                .then(authData => {
                    console.log(authData);
                    userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/404');
                });
        }
        //let values = Object.fromEntries(new FormData(e.target));
    };

    return (
        <>
            <p className={styles.title}>{authAction === 'login' ? 'Login your profile' : 'Register a profile'}</p>
            <form className={styles.form} onSubmit={submitHandler}>
                <input
                    className={styles["form__input"]}
                    placeholder="E-mail"
                    name='email'
                    onChange={changeHandler}
                    value={values.email}
                />
                <input
                    className={styles["form__input"]}
                    type="password"
                    name='password'
                    placeholder="Password"
                    onChange={changeHandler}
                    value={values.password}
                />
                {authAction === 'register' && 
                <input
                    className={styles["form__input"]}
                    type="password"
                    name='rePass'
                    placeholder="Repeat Password"
                    onChange={changeHandler}
                    value={values.rePass}
                />}
                <button className={styles["form__btn"]}>
                    {authAction === 'login' ? 'Login' : 'Register'}
                </button>
            </form>
        </>
    )
};

export default AuthForm;