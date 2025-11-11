import RestaurantLinkContainer from "../restaurantLink/RestaurantLinkContainer";
import styles from "./RestaurantNavigation.module.css";
import classNames from "classnames";

export default function RestaurantNavigation({ restaurantIds }) {
  return (
    <nav>
      <ul className={classNames(styles.list)}>
        {restaurantIds.map((restaurantId) => (
          <li key={restaurantId} className={classNames(styles.item)}>
            <RestaurantLinkContainer restaurantId={restaurantId} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
