import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import UserContainer from "../user/UserContainer";
import styles from "./ReviewListItemContent.module.css";
import classNames from "classnames";

export default function ReviewListItemContent({
  userId,
  reviewText,
  reviewRating,
}) {
  const { themeColor } = useThemeColorContext();

  return (
    <div className={styles.container}>
      <div>
        <UserContainer userId={userId} />
        <p className={classNames(styles.text, styles[`text--${themeColor}`])}>
          {reviewText}
        </p>
      </div>
      <p className={classNames(styles.rating, styles[`rating--${themeColor}`])}>
        {new Array(reviewRating + 1).join("★")}
      </p>
    </div>
  );
}
