import RestaurantCarouselContainer from "../restaurantCarousel/RestaurantCarouselContainer";
import RestaurantNavigationContainer from "../restaurantNavigation/RestaurantNavigationContainer";
import RestaurantViewContainer from "../restaurantView/RestaurantViewContainer";
import styles from "./Restaurants.module.css";
import classNames from "classnames";

export default function Restaurants({ title = "Restaurants" }) {
  return (
    <section className={classNames(styles.container)}>
      <h2 className={classNames(styles.title)}>{title}</h2>
      <RestaurantCarouselContainer />
      <RestaurantNavigationContainer />
      <RestaurantViewContainer />
    </section>
  );
}
