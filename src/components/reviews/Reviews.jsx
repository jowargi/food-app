import ReviewListItemContainer from "../reviewListItem/ReviewListItemContainer";

export default function Reviews({ reviewIds }) {
  return (
    <ul>
      {reviewIds.map((reviewId) => (
        <ReviewListItemContainer key={reviewId} reviewId={reviewId} />
      ))}
    </ul>
  );
}
