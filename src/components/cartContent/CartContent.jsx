import { withCartItemsCheck } from "../../hocs/withCartItemsCheck";
import CartItemContainer from "../cartItem/CartItemContainer";
import styles from "./CartContent.module.css";

const CartItemsList = ({ cartItemIds }) => {
  return (
    <ul className={styles.list}>
      {cartItemIds.map((cartItemId) => (
        <li key={cartItemId} className={styles.item}>
          <CartItemContainer cartItemId={cartItemId} />
        </li>
      ))}
    </ul>
  );
};

const EmptyCartMessage = () => {
  return <p className={styles.text}>Your shopping cart is empty!</p>;
};

const CartContent = withCartItemsCheck({
  CartItemsList,
  EmptyCartMessage,
});

export default CartContent;
