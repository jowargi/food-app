import { withAuthorized } from "../../hocs/withAuthorized";
import { useCartActions } from "../../hooks/useCartActions";
import Counter from "../counter/Counter";

const CartItemCounterAuthorized = ({ authorizedUser, cartItemId }) => {
  const { id: userId } = authorizedUser;

  const { count, increment, decrement } = useCartActions({
    userId,
    dishId: cartItemId,
  });

  return <Counter count={count} increment={increment} decrement={decrement} />;
};

const CartItemCounter = withAuthorized({
  AuthorizedComponent: CartItemCounterAuthorized,
});

export default CartItemCounter;
