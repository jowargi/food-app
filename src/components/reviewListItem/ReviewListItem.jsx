import EditableReview from "../editableReview/EditableReview";
import styles from "./ReviewListItem.module.css";

export default function ReviewListItem() {
  return (
    <li className={styles.item}>
      <EditableReview />
    </li>
  );
}
