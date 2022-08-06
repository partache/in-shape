// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState} from "react";
import MostPopularFood from '../MostPopularFood/MostPopularFood';
import styles from './Home.module.css';

 const HomePage = () => {

    const [foods, setFoods ] = useState([]);
    useEffect(() => {

    })

    return (
        <main className={styles.home}>
    
            <section className={styles.banner}>
                <div className={styles['banner__over']}>
                    <p className={styles['banner__moto']}>Fuel your ambition</p>
                    <p className={styles['banner__heading']}>30% discount with code: Summer</p>
                    <button className={styles['banner__btn']}>Buy now</button>
                </div>
            </section>
        	<MostPopularFood/>
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
                    <div className={styles["most-popular__img"]}>
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
        </main>
    );
}

export default HomePage;