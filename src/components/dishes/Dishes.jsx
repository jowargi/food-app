import DishListItemContainer from "../dishListItem/DishListItemContainer";

export default function Dishes({ menuIds }) {
  return (
    <ul>
      {menuIds.map((dishId) => (
        <DishListItemContainer key={dishId} dishId={dishId} />
      ))}
    </ul>
  );
}
