import styles from "./User.module.css";

export default function User({ userName }) {
  return <h5 className={styles.title}>{userName}</h5>;
}
