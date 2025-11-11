import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api/dishes/api";
import Dishes from "./Dishes";

export default function DishesContainer() {
  const { restaurantId } = useParams();

  const { data: menuIds } = useGetDishesByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((dish) => dish.id),
    }),
  });

  return menuIds?.length ? (
    <Dishes menuIds={menuIds} />
  ) : (
    <p>The menu is temporarily unavailable. Try again later!</p>
  );
}
