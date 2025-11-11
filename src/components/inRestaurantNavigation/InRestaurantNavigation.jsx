import RouterLink from "../routerLink/RouterLink";
import styles from "./InRestaurantNavigation.module.css";
import classNames from "classnames";

export default function InRestaurantNavigation() {
  return (
    <nav>
      <ul className={classNames(styles.list)}>
        <li className={classNames(styles.item)}>
          <RouterLink to="menu">Menu</RouterLink>
        </li>
        <li className={classNames(styles.item)}>
          <RouterLink to="reviews">Reviews</RouterLink>
        </li>
      </ul>
    </nav>
  );
}
