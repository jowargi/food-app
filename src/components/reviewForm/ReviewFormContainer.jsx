import { useEffect } from "react";
import { withAuthorized } from "../../hocs/withAuthorized";
import { useReviewForm } from "../../hooks/useReviewForm";
import { useAddReviewByRestaurantIdMutation } from "../../redux/api/reviews/api";
import { useParams } from "react-router-dom";
import { useTimeout } from "../../hooks/useTimeout";
import ErrorFallback from "../errorFallback/ErrorFallback";
import ReviewForm from "./ReviewForm";

const ReviewFormContainerAuthorized = ({ authorizedUser }) => {
  const { formState, setText, incrementRating, decrementRating, clear } =
    useReviewForm();

  const [addReviewByRestaurantId, { error, isLoading, isError, reset }] =
    useAddReviewByRestaurantIdMutation({
      fixedCacheKey: "addReviewByRestaurantId",
    });

  useEffect(() => () => reset(), [reset]);

  const { restaurantId } = useParams();

  const { setTimer } = useTimeout();

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formState.text.trim()) return;

    try {
      await addReviewByRestaurantId({
        restaurantId,
        review: { userId: authorizedUser.id, ...formState },
      }).unwrap();

      clear();
    } catch {
      setTimer(() => {
        reset();
        clear();
      }, 3000);
    }
  };

  return (
    <ReviewForm
      formState={formState}
      setText={setText}
      incrementRating={incrementRating}
      decrementRating={decrementRating}
      onSubmit={onSubmit}
      onClear={clear}
      isDisabled={isLoading}
    />
  );
};

const ReviewFormContainer = withAuthorized({
  AuthorizedComponent: ReviewFormContainerAuthorized,
});

export default ReviewFormContainer;
