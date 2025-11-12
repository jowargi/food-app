import { Outlet } from "react-router-dom";
import InRestaurantNavigation from "../inRestaurantNavigation/InRestaurantNavigation";
import ReviewFormContainer from "../reviewForm/ReviewFormContainer";
import styles from "./Restaurant.module.css";

export default function Restaurant({ restaurantName }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{restaurantName}</h3>
      <InRestaurantNavigation />
      <Outlet />
      <ReviewFormContainer />
    </div>
  );
}
