import { Link } from "react-router-dom";
import DishCounter from "../dishCounter/DishCounter";
import styles from "./Dish.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function Dish({ dishName, dishPrice, dishIngredients }) {
  const { themeColor } = useThemeColorContext();

  return (
    <section
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`]
      )}
    >
      <h2 className={classNames(styles.title, styles[`title--${themeColor}`])}>
        {dishName}
      </h2>
      <p className={classNames(styles.price, styles[`price--${themeColor}`])}>
        Price: {dishPrice}$
      </p>
      <p
        className={classNames(
          styles.ingredients,
          styles[`ingredients--${themeColor}`]
        )}
      >
        Ingredients: {dishIngredients.join(", ")}
      </p>
      <DishCounter />
      <Link
        to="/restaurants"
        className={classNames(styles.link, styles[`link--${themeColor}`])}
      >
        Back to restaurants
      </Link>
    </section>
  );
}
