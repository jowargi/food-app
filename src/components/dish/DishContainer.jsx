import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/api/dishes/api";
import Dish from "./Dish";

export default function DishContainer() {
  const { dishId } = useParams();

  const { data: dish } = useGetDishByIdQuery(dishId);

  const {
    name: dishName,
    price: dishPrice,
    ingredients: dishIngredients,
  } = dish || {};

  return dishName && dishPrice && dishIngredients?.length ? (
    <Dish
      dishName={dishName}
      dishPrice={dishPrice}
      dishIngredients={dishIngredients}
    />
  ) : null;
}
