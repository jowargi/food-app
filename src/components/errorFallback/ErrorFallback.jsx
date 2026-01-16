import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ErrorFallback.module.css";
import classNames from "classnames";

export default function ErrorFallback({ name, message }) {
  const { themeColor } = useThemeColorContext();

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`],
      )}
    >
      <h2 className={classNames(styles.name, styles[`name--${themeColor}`])}>
        {name}
      </h2>
      <p
        className={classNames(styles.message, styles[`message--${themeColor}`])}
      >
        {message}
      </p>
    </div>
  );
}
