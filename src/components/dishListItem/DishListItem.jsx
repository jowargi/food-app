import { Link } from "react-router-dom";
import styles from "./DishListItem.module.css";

export default function DishListItem({ dishId, dishName }) {
  return (
    <li className={styles.item}>
      <h5 className={styles.title}>{dishName}</h5>
      <Link to={`/dish/${dishId}`} className={styles.link}>
        Order
      </Link>
    </li>
  );
}
