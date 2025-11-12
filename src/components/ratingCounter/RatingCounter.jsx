import Counter from "../counter/Counter";
import styles from "./RatingCounter.module.css";

export default function RatingCounter({
  rating,
  incrementRating,
  decrementRating,
}) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Your current rating for the restaurant:</p>
      <Counter
        count={rating}
        increment={incrementRating}
        decrement={decrementRating}
      />
    </div>
  );
}
