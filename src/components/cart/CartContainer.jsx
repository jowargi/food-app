import { useSelector } from "react-redux";
import { withAuthorized } from "../../hocs/withAuthorized";
import { selectUserCartItemIds } from "../../redux/slices/cart/slice";
import Cart from "./Cart";

const CartContainerAuthorized = ({ authorizedUser }) => {
  const { id: userId } = authorizedUser;

  const cartItemIds = useSelector((state) =>
    selectUserCartItemIds(state, userId),
  );

  return <Cart cartItemIds={cartItemIds} />;
};

const CartContainer = withAuthorized({
  AuthorizedComponent: CartContainerAuthorized,
});

export default CartContainer;
