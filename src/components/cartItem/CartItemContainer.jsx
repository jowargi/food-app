import { useSelector } from "react-redux";
import { withAuthorized } from "../../hocs/withAuthorized";
import { selectUserCartItemQuantity } from "../../redux/slices/cart/slice";
import CartItem from "./CartItem";
import { useGetDishByIdQuery } from "../../redux/api/dishes/api";
import ErrorFallback from "../errorFallback/ErrorFallback";

const CartItemContainerAuthorized = ({ authorizedUser, cartItemId }) => {
  const { id: userId } = authorizedUser;

  const cartItemQuantity = useSelector((state) =>
    selectUserCartItemQuantity(state, userId, cartItemId)
  );

  const {
    data: dish,
    error,
    isLoading,
    isError,
  } = useGetDishByIdQuery(cartItemId);

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  const { name: dishName } = dish || {};

  return cartItemQuantity && dishName ? (
    <CartItem
      cartItemId={cartItemId}
      cartItemQuantity={cartItemQuantity}
      dishName={dishName}
    />
  ) : null;
};

const CartItemContainer = withAuthorized({
  AuthorizedComponent: CartItemContainerAuthorized,
});

export default CartItemContainer;
