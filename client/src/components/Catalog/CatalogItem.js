import styles from './Catalog.module.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const CatalogItem = ({
    item
}) => {
    return (
        <section className={styles["most-popular"]}>
        <article className={styles["most-popular__wrapper"]}>
            <div className={styles["most-popular__img__container"]}>
                <img className={styles["most-popular__img"]} src={ `/images/${item.img}`}/>
                <p className={styles["most-popular__buy"]}>Add to bag</p>
            </div>
            <p className={styles["most-popular__title"]}>{item.title}</p>
            <span className={styles["most-popular__rating"]}>
                {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
                <i className="fa-solid fa-star"></i>
            </span>
            <p className={styles["most-popular__price"]}>Price: {item.price}</p>
            <button className={styles["most-popular__btn"]}>
            <Link className={styles["most-popular__btn__link"]} to={`/catalog/${item._id}`}>More</Link>
            </button>
        </article>
    </section>
    );
}

CatalogItem.PropTypes = {
    item: PropTypes.object
}

export default CatalogItem;