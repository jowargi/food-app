import Button from "../button/Button";
import styles from "./Counter.module.css";
import classNames from "classnames";

export default function Counter({ count, increment, decrement }) {
  return (
    <div className={classNames(styles.container)}>
      <Button onClick={decrement}>-</Button>
      <span className={classNames(styles.count)}>{count}</span>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
