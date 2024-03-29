import styles from './Catalog.module.css';
import {  useContext } from 'react';
import { ItemContext } from '../../contexts/itemContext';
import CatalogItem from './CatalogItem';

const Catalog = () => {
    const { items } = useContext(ItemContext);

    return (
        <>
        { items.length > 0
            ? items.map( item => <CatalogItem key={item._id} item={item}/> )
            :  <div className={styles['no-articles']}>
                <p className={styles['no-articles-text']}>No items yet!</p>
                </div>
            }
        </>
    );
}


export default Catalog;