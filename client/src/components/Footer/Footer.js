import styles from './Footer.module.css';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
        <section className={styles["footer__subscribe"]}>
            <div className={styles["footer__subscribe__register"]}>
                <p className={styles["footer__heading"]}>Register for newsletter</p>
                <button className={styles["footer__btn"]}>Subscribe</button>
            </div>
            <div className={styles["footer-socials"]}>
                <p className={styles["footer__heading"]}>Follow us</p>
                <button className={styles["footer__icon"]}>
                    {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                    <i className="fa-brands fa-facebook"></i>
                </button>
                <button className={styles["footer__icon"]}>
                    {/* <FontAwesomeIcon icon="fa-brands fa-square-instagram" /> */}
                    <i className="fa-brands fa-instagram"></i>
                </button>
            </div>
        </section>
        <section className={styles["footer__main"]}>
            <div className={styles["footer__divider"]}></div>
            <ul className={styles["footer__main__help"]}>
                <p className={styles["footer__main__title"]}>Help and Info</p>
                <li className={styles["footer__help__categories"]}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-truck" /> */}
                    <i className="fa-solid fa-truck"></i>
                    <p className={styles["footer__main__list__text"]}>Delivery</p>
                </li>
                <li className={styles["footer__help__categories"]}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-arrow-left" /> */}
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    <p className={styles["footer__main__list__text"]}>Returns</p>
                </li>
                <li className={styles["footer__help__categories"]}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-circle-question" /> */}
                    <i className="fa-solid fa-circle-question"></i>
                    <p className={styles["footer__main__list__text"]}>FAQ</p>
                </li>
                <li className={styles["footer__help__categories"]}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                    <i className="fa-solid fa-envelope"></i>
                    <p className={styles["footer__main__list__text"]}>Contact us</p>
                </li>
            </ul>
            <ul className={styles["footer__main__products"]}>
                <p className={styles["footer__main__title"]}>Products</p>
                <li className={styles["footer__main__products__item"]}>
                    Food
                </li>
                <li className={styles["footer__main__products__item"]}>
                    Clothing and accessories
                </li>
                <li className={styles["footer__main__products__item"]}>
                    Supplements
                </li>
            </ul>
        </section>
    </footer>
    );
}

export default Footer;