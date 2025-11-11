import { useParams } from "react-router-dom";
import RestaurantContainer from "../restaurant/RestaurantContainer";

export default function RestaurantView({ restaurantIds }) {
  const { restaurantId: activeRestaurantId } = useParams();

  if (!restaurantIds.includes(activeRestaurantId)) return null;

  return (
    <RestaurantContainer
      key={activeRestaurantId}
      restaurantId={activeRestaurantId}
    />
  );
}
