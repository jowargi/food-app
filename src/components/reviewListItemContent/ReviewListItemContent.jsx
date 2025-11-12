import UserContainer from "../user/UserContainer";
import styles from "./ReviewListItemContent.module.css";

export default function ReviewListItemContent({
  userId,
  reviewText,
  reviewRating,
}) {
  return (
    <div className={styles.container}>
      <div>
        <UserContainer userId={userId} />
        <p className={styles.text}>{reviewText}</p>
      </div>
      <p className={styles.rating}>{new Array(reviewRating + 1).join("★")}</p>
    </div>
  );
}
