import UserContainer from "../user/UserContainer";
import styles from "./ReviewListItem.module.css";
import classNames from "classnames";

export default function ReviewListItem({ userId, reviewText, reviewRating }) {
  return (
    <li className={classNames(styles.item)}>
      <div>
        <UserContainer userId={userId} />
        <p className={classNames(styles.text)}>{reviewText}</p>
      </div>
      <p className={classNames(styles.rating)}>
        {new Array(reviewRating + 1).join("★")}
      </p>
    </li>
  );
}
