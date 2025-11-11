import { useGetRestaurantsQuery } from "../../redux/api/restaurants/api";
import RestaurantView from "./RestaurantView";

export default function RestaurantViewContainer() {
  const { data: restaurantIds } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((restaurant) => restaurant.id),
    }),
  });

  return restaurantIds?.length ? (
    <RestaurantView restaurantIds={restaurantIds} />
  ) : null;
}
