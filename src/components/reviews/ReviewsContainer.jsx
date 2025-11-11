import { useParams } from "react-router-dom";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/api/reviews/api";
import Reviews from "./Reviews";

export default function ReviewsContainer() {
  const { restaurantId } = useParams();

  const { data: reviewIds } = useGetReviewsByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((review) => review.id),
    }),
  });

  return reviewIds?.length ? (
    <Reviews reviewIds={reviewIds} />
  ) : (
    <p>No reviews yet. Be the first!</p>
  );
}
