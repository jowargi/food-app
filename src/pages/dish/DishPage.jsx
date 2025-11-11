import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/api/dishes/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import DishContainer from "../../components/dish/DishContainer";

export default function DishPage() {
  const { dishId } = useParams();

  const { error, isLoading, isFetching, isError } = useGetDishByIdQuery(dishId);

  if (isLoading || isFetching) return <p>Loading...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return <DishContainer />;
}
