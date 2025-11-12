import { useAuthorizedUserIdContext } from "../components/authorizedUserIdContextProvider/AuthorizedUserIdContextProvider";
import {
  useReviewContentContext,
  useReviewEditingModeContext,
  useReviewFormContext,
} from "../components/reviewListItem/ReviewListItemContainer";
import Button from "../components/button/Button";

export const withReviewEditable = ({ ReviewListItemContent, ReviewForm }) => {
  return () => {
    const { userId, reviewText, reviewRating } = useReviewContentContext();

    const {
      formState,
      setText,
      incrementRating,
      decrementRating,
      onSubmit,
      onClear,
      isDisabled,
    } = useReviewFormContext();

    const { authorizedUserId } = useAuthorizedUserIdContext();

    const { isEditing, startEditing } = useReviewEditingModeContext();

    if (userId === authorizedUserId && isEditing)
      return ReviewForm ? (
        <ReviewForm
          formState={formState}
          setText={setText}
          incrementRating={incrementRating}
          decrementRating={decrementRating}
          onSubmit={onSubmit}
          onClear={onClear}
          isDisabled={isDisabled}
        />
      ) : null;

    return ReviewListItemContent ? (
      <>
        <ReviewListItemContent
          userId={userId}
          reviewText={reviewText}
          reviewRating={reviewRating}
        />
        {userId === authorizedUserId && !isEditing ? (
          <Button onClick={startEditing}>Edit</Button>
        ) : null}
      </>
    ) : null;
  };
};
