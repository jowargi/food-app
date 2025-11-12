import FormControls from "../formControls/FormControls";
import RatingCounter from "../ratingCounter/RatingCounter";
import TextareaField from "../textareaField/TextareaField";
import styles from "./ReviewForm.module.css";

export default function ReviewForm({
  formState,
  setText,
  incrementRating,
  decrementRating,
  onSubmit,
  onClear,
  isDisabled,
}) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextareaField
        id="review-text"
        name="review"
        value={formState.text}
        onChange={(event) => setText(event.target.value)}
        labelText="Review"
      />
      <RatingCounter
        rating={formState.rating}
        incrementRating={incrementRating}
        decrementRating={decrementRating}
      />
      <FormControls onClear={onClear} isDisabled={isDisabled} />
    </form>
  );
}
