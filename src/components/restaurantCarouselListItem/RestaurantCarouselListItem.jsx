import { useCallback, useRef } from "react";
import styles from "./RestaurantCarouselListItem.module.css";
import { useNavigate } from "react-router-dom";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import { useRestaurantCarouselListItemTooltip } from "../../hooks/useRestaurantCarouselListItemTooltip";

export default function RestaurantCarouselListItem({
  restaurantId,
  restaurantName,
  imageUrl,
}) {
  const navigate = useNavigate();

  const onClick = useCallback(
    () => navigate(`/restaurants/${restaurantId}`),
    [navigate, restaurantId],
  );

  const { themeColor } = useThemeColorContext();

  const itemRef = useRef(null);

  useRestaurantCarouselListItemTooltip({
    elementRef: itemRef,
    content: restaurantName,
    themeColor,
  });

  return (
    <li ref={itemRef} onClick={onClick} className={styles.item}>
      <img
        src={imageUrl}
        onDragStart={(event) => event.preventDefault()}
        className={styles.img}
      />
    </li>
  );
}
