import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./MenuPageSkeleton.module.css";
import classNames from "classnames";

export default function MenuPageSkeleton() {
  const { themeColor } = useThemeColorContext();

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`]
      )}
    >
      <h4
        className={classNames(styles.title, styles[`title--${themeColor}`])}
      />
      <ul className={styles.list}>
        {new Array(2).fill().map((_, index) => (
          <li
            key={index}
            className={classNames(styles.item, styles[`item--${themeColor}`])}
          />
        ))}
      </ul>
    </div>
  );
}
