import FormControls from "../formControls/FormControls";
import RatingCounter from "../ratingCounter/RatingCounter";
import TextareaField from "../textareaField/TextareaField";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ReviewForm.module.css";
import classNames from "classnames";

export default function ReviewForm({
  formState,
  setText,
  incrementRating,
  decrementRating,
  onSubmit,
  onClear,
  isDisabled,
}) {
  const { themeColor } = useThemeColorContext();

  return (
    <form
      onSubmit={onSubmit}
      className={classNames(styles.form, styles[`form--${themeColor}`])}
    >
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
