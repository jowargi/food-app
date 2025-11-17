import { Link } from "react-router-dom";
import styles from "./DishListItem.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function DishListItem({ dishId, dishName }) {
  const { themeColor } = useThemeColorContext();

  return (
    <li className={classNames(styles.item, styles[`item--${themeColor}`])}>
      <h5 className={classNames(styles.title, styles[`title--${themeColor}`])}>
        {dishName}
      </h5>
      <Link
        to={`/dish/${dishId}`}
        className={classNames(styles.link, styles[`link--${themeColor}`])}
      >
        Order
      </Link>
    </li>
  );
}
