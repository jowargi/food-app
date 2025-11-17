import Counter from "../counter/Counter";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RatingCounter.module.css";
import classNames from "classnames";

export default function RatingCounter({
  rating,
  incrementRating,
  decrementRating,
}) {
  const { themeColor } = useThemeColorContext();

  return (
    <div className={styles.container}>
      <p className={classNames(styles.text, styles[`text--${themeColor}`])}>
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
