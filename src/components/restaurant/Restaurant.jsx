import { Outlet } from "react-router-dom";
import InRestaurantNavigation from "../inRestaurantNavigation/InRestaurantNavigation";
import ReviewFormContainer from "../reviewForm/ReviewFormContainer";
import styles from "./Restaurant.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function Restaurant({ restaurantName }) {
  const { themeColor } = useThemeColorContext();

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`],
      )}
    >
      <h3 className={classNames(styles.title, styles[`title--${themeColor}`])}>
        {restaurantName}
      </h3>
      <InRestaurantNavigation />
      <Outlet />
      <ReviewFormContainer />
    </div>
  );
}
