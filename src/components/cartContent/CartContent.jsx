import { withCartItemsCheck } from "../../hocs/withCartItemsCheck";
import CartItemContainer from "../cartItem/CartItemContainer";
import styles from "./CartContent.module.css";
import classNames from "classnames";

const CartItemsList = ({ cartItemIds }) => {
  return (
    <ul className={classNames(styles.list)}>
      {cartItemIds.map((cartItemId) => (
        <li key={cartItemId} className={classNames(styles.item)}>
          <CartItemContainer cartItemId={cartItemId} />
        </li>
      ))}
    </ul>
  );
};

const EmptyCartMessage = () => {
  return (
    <p className={classNames(styles.text)}>Your shopping cart is empty!</p>
  );
};

const CartContent = withCartItemsCheck({
  CartItemsList,
  EmptyCartMessage,
});

export default CartContent;
