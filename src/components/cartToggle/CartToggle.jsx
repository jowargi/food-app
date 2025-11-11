import { useCallback } from "react";
import { withAuthorized } from "../../hocs/withAuthorized";
import Button from "../button/Button";
import { useCartModalContext } from "../cartModalContextProvider/CartModalContextProvider";

const CartToggleAuthorized = ({ text = "Cart" }) => {
  const { isCartVisible, openCart } = useCartModalContext();

  const onClick = useCallback(() => openCart(), [openCart]);

  return (
    <Button onClick={onClick} isDisabled={isCartVisible}>
      {text}
    </Button>
  );
};

const CartToggle = withAuthorized({
  AuthorizedComponent: CartToggleAuthorized,
});

export default CartToggle;
