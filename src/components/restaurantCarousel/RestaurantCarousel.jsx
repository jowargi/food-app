import { useImageURLs } from "../../hooks/useImageURLs";
import RestaurantCarouselListItem from "../restaurantCarouselListItem/RestaurantCarouselListItem";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantCarousel.module.css";
import classNames from "classnames";

export default function RestaurantCarousel({ restaurantsWithImage }) {
  const restaurantsWithImageUrl = useImageURLs(restaurantsWithImage);

  const { themeColor } = useThemeColorContext();

  return (
    <ul className={classNames(styles.list, styles[`list--${themeColor}`])}>
      {restaurantsWithImageUrl.map((restaurant) => {
        const {
          id: restaurantId,
          name: restaurantName,
          img: imageUrl,
        } = restaurant;

        return restaurantId && restaurantName && imageUrl ? (
          <RestaurantCarouselListItem
            key={restaurantId}
            restaurantId={restaurantId}
            restaurantName={restaurantName}
            imageUrl={imageUrl}
          />
        ) : null;
      })}
    </ul>
  );
}
