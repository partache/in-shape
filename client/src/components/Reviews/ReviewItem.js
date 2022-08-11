import styles from './ReviewItem.css'
import StarRating from '../StarRating/StarRating';

export const ReviewItem = ({review}) => {
   
    // const ratingArr = [];
    // const starsNotRated = [];

    // for(let i = 0; i < review.rating; i++){
    //     ratingArr.push(<i className={`fa-solid fa-star ${styles["item__rating__star"]}`} key={review._id}></i>)
    // }
    // const outOfMaxRating = 5 - review.rating;

    // for(let i = 0; i < outOfMaxRating; i++){
    //     starsNotRated.push(<i className={`fa-solid fa-star ${styles["item__rating__star__not_rated"]}`} key={review._id}></i>)
    // }

    return (
        <div className={styles["review__devider"]}>
            <p className={styles["review__by"]}>{review.date} by {review.owner}</p>
            <p className={styles["review__description"]}>{review.description}</p>
            <span className={styles["item__rating"]}>
            <StarRating/>
            </span>
        </div>
    )
}

export default ReviewItem;