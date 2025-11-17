import RestaurantCarouselContainer from "../restaurantCarousel/RestaurantCarouselContainer";
import RestaurantNavigationContainer from "../restaurantNavigation/RestaurantNavigationContainer";
import RestaurantViewContainer from "../restaurantView/RestaurantViewContainer";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./Restaurants.module.css";
import classNames from "classnames";

export default function Restaurants({ title = "Restaurants" }) {
  const { themeColor } = useThemeColorContext();

  return (
    <section
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`]
      )}
    >
      <h2 className={classNames(styles.title, styles[`title--${themeColor}`])}>
        {title}
      </h2>
      <RestaurantCarouselContainer />
      <RestaurantNavigationContainer />
      <RestaurantViewContainer />
    </section>
  );
}
