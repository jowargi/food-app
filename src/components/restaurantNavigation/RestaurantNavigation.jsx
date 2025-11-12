import RestaurantLinkContainer from "../restaurantLink/RestaurantLinkContainer";
import styles from "./RestaurantNavigation.module.css";

export default function RestaurantNavigation({ restaurantIds }) {
  return (
    <nav>
      <ul className={styles.list}>
        {restaurantIds.map((restaurantId) => (
          <li key={restaurantId} className={styles.item}>
            <RestaurantLinkContainer restaurantId={restaurantId} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
