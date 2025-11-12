import { useImageURLs } from "../../hooks/useImageURLs";
import RestaurantCarouselListItem from "../restaurantCarouselListItem/RestaurantCarouselListItem";
import styles from "./RestaurantCarousel.module.css";

export default function RestaurantCarousel({ restaurantsWithImage }) {
  const restaurantsWithImageUrl = useImageURLs(restaurantsWithImage);

  return (
    <ul className={styles.list}>
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
