import { Outlet } from "react-router-dom";
import InRestaurantNavigation from "../inRestaurantNavigation/InRestaurantNavigation";
import ReviewFormContainer from "../reviewForm/ReviewFormContainer";
import styles from "./Restaurant.module.css";
import classNames from "classnames";

export default function Restaurant({ restaurantName }) {
  return (
    <div className={classNames(styles.container)}>
      <h3 className={classNames(styles.title)}>{restaurantName}</h3>
      <InRestaurantNavigation />
      <Outlet />
      <ReviewFormContainer />
    </div>
  );
}
