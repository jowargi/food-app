import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api/dishes/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import DishesContainer from "../../components/dishes/DishesContainer";
import styles from "./MenuPage.module.css";
import classNames from "classnames";

export default function MenuPage() {
  const { restaurantId } = useParams();

  const { error, isLoading, isFetching, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) return <p>Loading...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return (
    <div className={classNames(styles.container)}>
      <h4 className={classNames(styles.title)}>Menu</h4>
      <DishesContainer />
    </div>
  );
}
