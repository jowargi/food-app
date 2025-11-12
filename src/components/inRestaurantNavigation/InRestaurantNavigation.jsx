import RouterLink from "../routerLink/RouterLink";
import styles from "./InRestaurantNavigation.module.css";

export default function InRestaurantNavigation() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <RouterLink to="menu">Menu</RouterLink>
        </li>
        <li className={styles.item}>
          <RouterLink to="reviews">Reviews</RouterLink>
        </li>
      </ul>
    </nav>
  );
}
