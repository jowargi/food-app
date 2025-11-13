import { useGetRestaurantsQuery } from "../../redux/api/restaurants/api";
import RestaurantDescriptionPopup from "./RestaurantDescriptionPopup";

export default function RestaurantDescriptionPopupContainer({ restaurantId }) {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  const { description: restaurantDescription } = restaurant || {};

  return restaurantDescription ? (
    <RestaurantDescriptionPopup restaurantDescription={restaurantDescription} />
  ) : null;
}
