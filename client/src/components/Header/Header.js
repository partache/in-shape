import styles from './Header.module.css';
import ProfileMenu from './ProfileMenu';
import { useState, useEffect} from "react";

const Header = () => {
    const [isProfleMenuShown, setIsProfileMenuShown] = useState(false);

    const showProfileMenu = (event, boolean) => {
        console.log(event.target);
        setIsProfileMenuShown(boolean);
    }

    useEffect( () => {
   
    }, [isProfleMenuShown]);

    return (
        <header>
        <nav className={styles.navigation}  >
            <span className={styles.headerLogo}>
                <p>InShape</p>
            </span>
            <form className={styles.miniform}>
                <button className={styles["miniform__icon"]}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input className={styles["miniform__input"]}>
                </input>
            </form>
            <button className={styles["miniform__btn"]} onClick={(event) => showProfileMenu(event, true)} onBlur={(event) => showProfileMenu(event, false)}>
                {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                <i className="fa-solid fa-user" ></i>
                {isProfleMenuShown && <ProfileMenu/>}
            </button>
            <button className={styles["miniform__btn"]}>
                {/* <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /> */}
                <i className="fa-solid fa-bag-shopping"></i>
            </button>
        </nav>
        <ul className={styles.menu}>
            <li className={styles["items__elem"]}>
                Nutrition
            </li>
            <li className={styles["items__elem"]}>
                Clothing
            </li>
            <li className={styles["items__elem"]}>
                Supplements
            </li>
        </ul>
        </header>
    );
}

export default Header;