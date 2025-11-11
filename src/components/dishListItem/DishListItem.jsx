import { Link } from "react-router-dom";
import styles from "./DishListItem.module.css";
import classNames from "classnames";

export default function DishListItem({ dishId, dishName }) {
  return (
    <li className={classNames(styles.item)}>
      <h5 className={classNames(styles.title)}>{dishName}</h5>
      <Link to={`/dish/${dishId}`} className={classNames(styles.link)}>
        Order
      </Link>
    </li>
  );
}
