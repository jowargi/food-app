import Button from "../button/Button";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./Counter.module.css";
import classNames from "classnames";

export default function Counter({ count, increment, decrement }) {
  const { themeColor } = useThemeColorContext();

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`]
      )}
    >
      <Button onClick={decrement}>-</Button>
      <span
        className={classNames(styles.count, styles[`count--${themeColor}`])}
      >
        {count}
      </span>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
