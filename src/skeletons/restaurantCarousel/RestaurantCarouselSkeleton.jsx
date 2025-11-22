import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantCarouselSkeleton.module.css";
import classNames from "classnames";

export default function RestaurantCarouselSkeleton() {
  const { themeColor } = useThemeColorContext();

  return (
    <ul className={classNames(styles.list, styles[`list--${themeColor}`])}>
      {new Array(4).fill().map((_, index) => (
        <li
          key={index}
          className={classNames(styles.item, styles[`item--${themeColor}`])}
        />
      ))}
    </ul>
  );
}
