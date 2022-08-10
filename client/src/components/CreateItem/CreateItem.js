import { useState, useContext } from 'react';
import { ItemContext } from '../../contexts/itemContext';

import styles from './CreateItem.module.css';
import * as ItemService from '../../services/ProductService';

const CreateItem = () => {
    const { addNewItem} = useContext(ItemContext);
    const [values, setValues] = useState({
        title: '',
        category: 'clothing',
        subCategory: '',
        size: '',
        description: '',
        price: '',
        img: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
  
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);

        ItemService.createItem(values)
        .then(result => addNewItem(result));
  
    };

    return (
            <section className={styles.create}>
                <div className={styles.tile}>
                    <ul className={styles["tile__action"]}>
                        <li className={styles["tile__action__title"]}>
                            Create
                        </li>
                    </ul>
                    <p className={styles.title}>Create your item!</p>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <input
                            className={styles["form__input"]}
                            name='title'
                            placeholder="Title"
                            onChange={changeHandler}
                            value={values.title}
                        />
                        <select
                            className={styles["form__input"]}
                            placeholder="Category"
                            name='category'
                            onChange={changeHandler}
                            value={values.category}
                        >
                            <option value="clothing">Clothing</option>
                            <option value="supplements">Supplements</option>
                            <option value="food">Food</option>
                        </select>
                        <input
                            className={styles["form__input"]}
                            name='subCategory'
                            placeholder="Subcategory title"
                            onChange={changeHandler}
                            value={values.subCategory}
                        />
                        <input
                            className={styles["form__input"]}
                            name='size'
                            placeholder="Size or Weight"
                            onChange={changeHandler}
                            value={values.size}
                        />
                        <textarea
                            className={styles["form__input"]}
                            name='description'
                            placeholder="Description"
                            onChange={changeHandler}
                            value={values.description}
                        />
                        <input
                            className={styles["form__input"]}
                            name='price'
                            placeholder="Price"
                            onChange={changeHandler}
                            value={values.price}
                        />
                        <input
                            className={styles["form__input"]}
                            name='img'
                            placeholder="Image URL"
                            onChange={changeHandler}
                            value={values.image}
                        />
                        <button className={styles["form__btn"]}>
                            Submit
                        </button>
                    </form>
                </div>
            </section>
    );
};

export default CreateItem;