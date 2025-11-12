import UserContainer from "../user/UserContainer";
import styles from "./ReviewListItem.module.css";

export default function ReviewListItem({ userId, reviewText, reviewRating }) {
  return (
    <li className={styles.item}>
      <div>
        <UserContainer userId={userId} />
        <p className={styles.text}>{reviewText}</p>
      </div>
      <p className={styles.rating}>{new Array(reviewRating + 1).join("★")}</p>
    </li>
  );
}
