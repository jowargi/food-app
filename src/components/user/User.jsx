import styles from "./User.module.css";
import classNames from "classnames";

export default function User({ userName }) {
  return <h5 className={classNames(styles.title)}>{userName}</h5>;
}
