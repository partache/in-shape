import { useState} from "react";
import styles from './StarRating.module.css'

// import { StartRatingContext } from "../../contexts/starRatingContext";

const StarRating = ({rating, setRating}) => {
    // const { rating, setRating } = useContext(StartRatingContext);
    const [hover, setHover] = useState(0);
    // const [rating, setRating] = useState(0);
    
    return (
      <div className="rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= ((hover && rating) || hover) ? `${styles["on"]}` : `${styles["off"]}`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <i className={`fa-solid fa-star ${styles["item__rating__star"]}`}></i>
            </button>
          );
        })}
      </div>
    );
  };
  export default StarRating;