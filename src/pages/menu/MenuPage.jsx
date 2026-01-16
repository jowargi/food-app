import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api/dishes/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import DishesContainer from "../../components/dishes/DishesContainer";
import styles from "./MenuPage.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import MenuPageSkeleton from "../../skeletons/menuPage/MenuPageSkeleton";

export default function MenuPage() {
  const { restaurantId } = useParams();

  const { error, isLoading, isFetching, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  const { themeColor } = useThemeColorContext();

  if (isLoading || isFetching) return <MenuPageSkeleton />;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return (
    <div
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`],
      )}
    >
      <h4 className={classNames(styles.title, styles[`title--${themeColor}`])}>
        Menu
      </h4>
      <DishesContainer />
    </div>
  );
}
