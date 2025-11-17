import classNames from "classnames";
import { usePopupRectContext } from "../restaurantLink/RestaurantLink";
import styles from "./RestaurantDescriptionPopup.module.css";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function RestaurantDescriptionPopup({ restaurantDescription }) {
  const { popupWidth, popupLeft, popupTop } = usePopupRectContext();
  const { themeColor } = useThemeColorContext();

  return (
    <div
      className={classNames(styles.popup, styles[`popup--${themeColor}`])}
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
