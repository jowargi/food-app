import { useGetRestaurantByIdQuery } from "../../redux/api/restaurants/api";
import ErrorFallback from "../errorFallback/ErrorFallback";
import Restaurant from "./Restaurant";

export default function RestaurantContainer({ restaurantId }) {
  const {
    data: restaurant,
    error,
    isLoading,
    isError,
  } = useGetRestaurantByIdQuery(restaurantId);

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  const { name: restaurantName } = restaurant || {};

  return restaurantName ? <Restaurant restaurantName={restaurantName} /> : null;
}
