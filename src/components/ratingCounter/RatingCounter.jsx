import Counter from "../counter/Counter";
import styles from "./RatingCounter.module.css";
import classNames from "classnames";

export default function RatingCounter({
  rating,
  incrementRating,
  decrementRating,
}) {
  return (
    <div className={classNames(styles.container)}>
      <p className={classNames(styles.text)}>
        Your current rating for the restaurant:
      </p>
      <Counter
        count={rating}
        increment={incrementRating}
        decrement={decrementRating}
      />
    </div>
  );
}
