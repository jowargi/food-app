import { withReviewEditable } from "../../hocs/withReviewEditable";
import ReviewForm from "../reviewForm/ReviewForm";
import ReviewListItemContent from "../reviewListItemContent/ReviewListItemContent";

const EditableReview = withReviewEditable({
  ReviewListItemContent,
  ReviewForm,
});

export default EditableReview;
