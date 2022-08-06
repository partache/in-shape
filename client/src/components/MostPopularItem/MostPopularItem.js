import styles from './MostPopularItem.module.css'

const MostPopularItem = ({
    item
}) => {
    let title = '';
    if(item.category === 'food'){
        title = 'Most Popular'
    } else if(item.category === 'clothing'){
        title = 'Fitness clothing'
    }
    
    return (
        <section className={styles["most-popular"]}>
            <p className={styles["most-popular__heading"]}>{title}</p>
            <article className={styles["most-popular__wrapper"]}>
                <div className={styles["most-popular__img"]}>
                    <p className={styles["most-popular__buy"]}>Add to bag</p>
                </div>
                <p className={styles["most-popular__title"]}>{item.title}</p>
                <span className={styles["most-popular__rating"]}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
                    <i className="fa-solid fa-star"></i>
                </span>
                <p className={styles["most-popular__price"]}>Price: {item.price}</p>
                <button className={styles["most-popular__btn"]}>More</button>
            </article>
        </section>
    );
}

export default MostPopularItem;