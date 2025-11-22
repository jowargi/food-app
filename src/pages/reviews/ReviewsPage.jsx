import { useParams } from "react-router-dom";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/api/reviews/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import ReviewsContainer from "../../components/reviews/ReviewsContainer";
import styles from "./ReviewsPage.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import ReviewsPageSkeleton from "../../skeletons/reviewsPage/ReviewsPageSkeleton";

export default function ReviewsPage() {
  const { restaurantId } = useParams();

  const { error, isLoading, isFetching, isError } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  const { themeColor } = useThemeColorContext();

  if (isLoading || isFetching) return <ReviewsPageSkeleton />;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`]
      )}
    >
      <h4 className={classNames(styles.title, styles[`title--${themeColor}`])}>
        Reviews
      </h4>
      <ReviewsContainer />
    </div>
  );
}
