import classNames from "classnames";
import RestaurantLinkContainer from "../restaurantLink/RestaurantLinkContainer";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantNavigation.module.css";

export default function RestaurantNavigation({ restaurantIds }) {
  const { themeColor } = useThemeColorContext();

  return (
    <nav>
      <ul className={classNames(styles.list, styles[`list--${themeColor}`])}>
        {restaurantIds.map((restaurantId) => (
          <li key={restaurantId} className={styles.item}>
            <RestaurantLinkContainer restaurantId={restaurantId} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
