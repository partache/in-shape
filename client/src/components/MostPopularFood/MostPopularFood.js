import styles from './MostPopularFood.module.css'

const MostPopularFood = (props) => {
    return (
        <section className={styles["most-popular"]}>
            <p className={styles["most-popular__heading"]}>Most Popular</p>
            <article className={styles["most-popular__wrapper"]}>
                <div className={styles["most-popular__img"]}>
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
    );
}

export default MostPopularFood;