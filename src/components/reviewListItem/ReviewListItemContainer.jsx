import { useParams } from "react-router-dom";
import {
  useEditReviewByIdMutation,
  useGetReviewsByRestaurantIdQuery,
} from "../../redux/api/reviews/api";
import ReviewListItem from "./ReviewListItem";
import { createContext, useCallback, useContext } from "react";
import { useReviewEditingMode } from "../../hooks/useReviewEditingMode";
import { useReviewItemForm } from "../../hooks/useReviewItemForm";

const ReviewEditingModeContext = createContext({
  isEditing: null,
  startEditing: () => null,
  stopEditing: () => null,
});

const ReviewContentContext = createContext({
  userId: null,
  reviewText: null,
  reviewRating: null,
});

const ReviewFormContext = createContext({
  formState: null,
  setText: () => null,
  incrementRating: () => null,
  decrementRating: () => null,
  onSubmit: () => null,
  onClear: () => null,
  isDisabled: null,
});

export const useReviewEditingModeContext = () =>
  useContext(ReviewEditingModeContext);

export const useReviewContentContext = () => useContext(ReviewContentContext);

export const useReviewFormContext = () => useContext(ReviewFormContext);

export default function ReviewListItemContainer({ reviewId }) {
  const { restaurantId } = useParams();

  const { data: review } = useGetReviewsByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((review) => review.id === reviewId),
    }),
  });

  const { isEditing, startEditing, stopEditing } = useReviewEditingMode();

  const { formState, setText, incrementRating, decrementRating, clear } =
    useReviewItemForm(restaurantId, reviewId);

  const [editReviewById, { isLoading }] = useEditReviewByIdMutation();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formState.text.trim()) return;

    try {
      await editReviewById({
        restaurantId,
        reviewId,
        review: { ...formState },
      }).unwrap();
    } catch {
      clear();
    }
  };

  const onClear = useCallback(() => {
    clear();
    stopEditing();
  }, [clear, stopEditing]);

  const { userId, text: reviewText, rating: reviewRating } = review || {};

  return userId && reviewText && reviewRating ? (
    <ReviewEditingModeContext.Provider
      value={{ isEditing, startEditing, stopEditing }}
    >
      <ReviewContentContext.Provider
        value={{ userId, reviewText, reviewRating }}
      >
        <ReviewFormContext.Provider
          value={{
            formState,
            setText,
            incrementRating,
            decrementRating,
            onSubmit,
            onClear,
            isDisabled: isLoading,
          }}
        >
          <ReviewListItem />
        </ReviewFormContext.Provider>
      </ReviewContentContext.Provider>
    </ReviewEditingModeContext.Provider>
  ) : null;
}
