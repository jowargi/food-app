import { useSelector } from "react-redux";
import { useGetRestaurantsQuery } from "../../redux/api/restaurants/api";
import { useRequest } from "../../redux/hooks/useRequest";
import { getRestaurantsWithImage } from "../../redux/slices/restaurantsWithImage/getRestaurantsWithImage";
import {
  selectRestaurantsWithImage,
  selectRestaurantsWithImageError,
} from "../../redux/slices/restaurantsWithImage/slice";
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants/requestStatuses";
import ErrorFallback from "../errorFallback/ErrorFallback";
import RestaurantCarousel from "./RestaurantCarousel";
import RestaurantCarouselSkeleton from "../../skeletons/restaurantCarousel/RestaurantCarouselSkeleton";

export default function RestaurantCarouselContainer() {
  const { data: restaurantIds } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((restaurant) => restaurant.id),
    }),
  });

  const requestStatus = useRequest({ thunk: getRestaurantsWithImage });

  let restaurantsWithImage = useSelector(selectRestaurantsWithImage);

  const restaurantsWithImageError = useSelector(
    selectRestaurantsWithImageError
  );

  if (requestStatus === REQUEST_STATUS_IDLE) return null;

  if (requestStatus === REQUEST_STATUS_PENDING)
    return <RestaurantCarouselSkeleton />;

  if (
    requestStatus === REQUEST_STATUS_REJECTED &&
    restaurantsWithImageError?.name !== "ConditionError"
  )
    return (
      <ErrorFallback
        name={restaurantsWithImageError.name}
        message={restaurantsWithImageError.message}
      />
    );

  restaurantsWithImage = restaurantsWithImage.filter((restaurant) =>
    restaurantIds.includes(restaurant.id)
  );

  if (!restaurantsWithImage.length) return null;

  return <RestaurantCarousel restaurantsWithImage={restaurantsWithImage} />;
}
