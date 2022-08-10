import { useEffect, useState} from "react";
import MostPopularItem from '../MostPopularItem/MostPopularItem';
import styles from './Home.module.css';
import * as itemService from '../../services/ProductService';

 const HomePage = () => {

    const [food, setFood ] = useState([]);
    const [clothing, setClothing ] = useState([]);
    // useEffect(() => {
    //     itemService.getPopularItems('food')
    //     .then(result => {
    //         setFood(result);
    //     })
    // }, []);

    // useEffect(() => {
    //     itemService.getPopularItems('clothing')
    //     .then(result => {
    //         setClothing(result);
    //     })
    // }, []);

    return (
        <main className={styles.home}>
    
            <section className={styles.banner}>
                <div className={styles['banner__over']}>
                    <p className={styles['banner__moto']}>Fuel your ambition</p>
                    <p className={styles['banner__heading']}>30% discount with code: Summer</p>
                    <button className={styles['banner__btn']}>Buy now</button>
                </div>
            </section>
        	{ food.length > 0
                    ? food.map( x => <MostPopularItem key={x._id} item={x}/>)
                    :   <div className={styles['no-articles']}>
                        <p className={styles['no-articles-text']}>No foods yet</p>
                        </div>
            }
            <section className={styles.banner}>
                <div className={styles['banner__over']}>
                    <p className={styles['banner__moto']}>Dress the best</p>
                    <p className={styles['banner__heading']}>Summer essentials</p>
                    <button className={styles['banner__btn']}>Buy now</button>
                </div>
            </section>
            { clothing.length > 0
            ? clothing.map( x => <MostPopularItem item={x}/> )
            :  <div className={styles['no-articles']}>
                <p className={styles['no-articles-text']}>No clothing yet</p>
                </div>
            }
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