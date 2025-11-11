import { Link } from "react-router-dom";
import DishCounter from "../dishCounter/DishCounter";
import styles from "./Dish.module.css";
import classNames from "classnames";

export default function Dish({ dishName, dishPrice, dishIngredients }) {
  return (
    <section className={classNames(styles.container)}>
      <h2 className={classNames(styles.title)}>{dishName}</h2>
      <p className={classNames(styles.price)}>Price: {dishPrice}$</p>
      <p className={classNames(styles.ingredients)}>
        Ingredients: {dishIngredients.join(", ")}
      </p>
      <DishCounter />
      <Link to="/restaurants" className={classNames(styles.link)}>
        Back to restaurants
      </Link>
    </section>
  );
}
