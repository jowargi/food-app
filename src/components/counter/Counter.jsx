import Button from "../button/Button";
import styles from "./Counter.module.css";

export default function Counter({ count, increment, decrement }) {
  return (
    <div className={styles.container}>
      <Button onClick={decrement}>-</Button>
      <span className={styles.count}>{count}</span>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
