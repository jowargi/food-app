import { Link } from "react-router-dom";
import DishCounter from "../dishCounter/DishCounter";
import styles from "./Dish.module.css";

export default function Dish({ dishName, dishPrice, dishIngredients }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{dishName}</h2>
      <p className={styles.price}>Price: {dishPrice}$</p>
      <p className={styles.ingredients}>
        Ingredients: {dishIngredients.join(", ")}
      </p>
      <DishCounter />
      <Link to="/restaurants" className={styles.link}>
        Back to restaurants
      </Link>
    </section>
  );
}
