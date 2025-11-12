import RestaurantCarouselContainer from "../restaurantCarousel/RestaurantCarouselContainer";
import RestaurantNavigationContainer from "../restaurantNavigation/RestaurantNavigationContainer";
import RestaurantViewContainer from "../restaurantView/RestaurantViewContainer";
import styles from "./Restaurants.module.css";

export default function Restaurants({ title = "Restaurants" }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <RestaurantCarouselContainer />
      <RestaurantNavigationContainer />
      <RestaurantViewContainer />
    </section>
  );
}
