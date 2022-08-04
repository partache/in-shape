// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Home.module.css';


export const HomePage = () => {

    return (
        <div className={styles.home}>
            <nav className={styles.navigation}>
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
                <button className={styles["miniform__btn"]}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                    <i className="fa-solid fa-user"></i>
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
            <section className={styles.banner}>
                <div className={styles['banner__over']}>
                    <p className={styles['banner__moto']}>Fuel your ambition</p>
                    <p className={styles['banner__heading']}>30% discount with code: Summer</p>
                    <button className={styles['banner__btn']}>Buy now</button>
                </div>
            </section>
            <section className={styles["most-popular"]}>
                <p className={styles["most-popular__heading"]}>Most Popular</p>
                <article className={styles["most-popular__wrapper"]}>
                    <div src="logo512" className={styles["most-popular__img"]}>
                        <p className={styles["most-popular__buy"]}>Add to bag</p>
                    </div>
                    <p className={styles["most-popular__title"]}>Food title</p>
                    <span className={styles["most-popular__rating"]}>
                        {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <p className={styles["most-popular__price"]}>Price</p>
                    <button className={styles["most-popular__btn"]}>More</button>
                </article>
            </section>
            <section className={styles.banner}>
                <div className={styles['banner__over']}>
                    <p className={styles['banner__moto']}>Dress the best</p>
                    <p className={styles['banner__heading']}>Summer essentials</p>
                    <button className={styles['banner__btn']}>Buy now</button>
                </div>
            </section>
            <section className={styles["most-popular"]}>
                <p className={styles["most-popular__heading"]}>Fitness clothing</p>
                <article className={styles["most-popular__wrapper"]}>
                    <div src="logo512" className={styles["most-popular__img"]}>
                        <p className={styles["most-popular__buy"]}>Add to bag</p>
                    </div>
                    <p className={styles["most-popular__title"]}>Clothing title</p>
                    <span className={styles["most-popular__rating"]}>
                        {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <p className={styles["most-popular__price"]}>Price</p>
                    <button className={styles["most-popular__btn"]}>More</button>
                </article>
            </section>
            <section className={styles.blog}>
                <article className={styles["blog__article"]}>
                    <p className={styles["blog__title"]}>Blog title</p>
                    <p className={styles["blog__description"]}>Blog description</p>
                </article>
            </section>
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
        </div>
    );
}