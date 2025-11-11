import RouterLink from "../routerLink/RouterLink";

export default function RestaurantLink({ restaurantId, restaurantName }) {
  return (
    <RouterLink to={`/restaurants/${restaurantId}`}>
      {restaurantName}
    </RouterLink>
  );
}
