import styles from './ItemDetails.module.css'
import { useParams} from 'react-router-dom';
import * as itemService from '../../services/ProductService';
import { useState, useEffect } from 'react';
import Reviews from '../Reviews/Reviews';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({})
    console.log(itemId)
    useEffect(() => {
        itemService.getItemById(itemId)
        .then(result => {
          setItem(result);
        });
      }, []);

    return (
        <>
        <section className={styles.item} >
            <div className={styles['item__img']}>
            <img className={styles["item__img__"]} src={`/images/${item.img}`}/>
            </div>
            <div className={styles['item__info']}>
            <p className={styles["item__title"]}>{item.title}</p>
            <p className={styles["item__subtitle"]}>{item.subCategory}</p>
            <div className={styles["item__devider"]}></div>
            <p className={styles["item__size"]}>Size: {item.size}</p>
            <span className={styles["item__rating"]}>
                {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
                <i className="fa-solid fa-star"></i>
            </span>
            <p className={styles["item__price"]}>Price: {item.price}</p>
            <div className={styles["item__devider"]}></div>
            <button className={styles["item__btn"]}>Buy</button>
            </div>
        </section>
        <Reviews itemId={item._id}/>
        </>
    );
}

export default ItemDetails;