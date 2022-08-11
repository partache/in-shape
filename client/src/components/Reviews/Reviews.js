import { useState, useEffect } from "react";
import * as reviewsService from '../../services/ReviewService';
import StarRating from "../StarRating/StarRating";
import ReviewItem from "./ReviewItem";
import styles from "./Reviews.module.css";

const Reviews = ({itemId}) => {
    const [reviews, setReviews] = useState([]);
    // const { reviews, addReview} = useContext(ReviewContext);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        reviewsService.getReviews(itemId)
        .then(result => {
          setReviews(result);
        });
      }, []);

    //   const [values, setValues] = useState({
    //     title: '',
    //     category: 'clothing',
    //     subCategory: '',
    //     size: '',
    //     description: '',
    //     price: '',
    //     img: ''
    // });

    // const changeHandler = (e) => {
    //     setValues(e.target.value);
    // };
  
    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     reviewsService.createReview(values)
    //     .then(result => addNewReview(result));
  
    // };
//onSubmit={submitHandler}
    return (
        <section>
            <p>Customer Reviews</p>
            <form className={styles.form} >
                <textarea>Create your first Review!</textarea>
                <button className={styles["form__btn"]}>
                            Submit
                </button>
            </form>
                <StarRating rating={rating} setRating={setRating}/>
            <ul>
               {reviews 
               ? reviews.map( review => <ReviewItem key={review._id} review={review}/>)
               : <p>No reviews yet!</p>
                }
            </ul>
        </section>
    )
}

export default Reviews;