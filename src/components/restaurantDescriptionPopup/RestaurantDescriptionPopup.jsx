import { usePopupRectContext } from "../restaurantLink/RestaurantLink";
import styles from "./RestaurantDescriptionPopup.module.css";

export default function RestaurantDescriptionPopup({ restaurantDescription }) {
  const { popupWidth, popupLeft, popupTop } = usePopupRectContext();

  return (
    <div
      className={styles.popup}
      style={{
        width: `${popupWidth}px`,
        left: `${popupLeft}px`,
        top: `${popupTop + 10}px`,
      }}
    >
      <p>{restaurantDescription}</p>
    </div>
  );
}
