import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantSkeleton.module.css";
import classNames from "classnames";

export default function RestaurantSkeleton() {
  const { themeColor } = useThemeColorContext();

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`]
      )}
    >
      <h3
        className={classNames(styles.title, styles[`title--${themeColor}`])}
      />
      <nav>
        <ul
          className={classNames(styles.list, styles[`list--${themeColor}`])}
        />
      </nav>
    </div>
  );
}
