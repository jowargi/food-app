import CartItemCounter from "../cartItemCounter/CartItemCounter";
import styles from "./CartItem.module.css";
import classNames from "classnames";

export default function CartItem({ cartItemId, cartItemQuantity, dishName }) {
  return (
    <>
      <h3 className={classNames(styles.title)}>{dishName}</h3>
      <p className={classNames(styles.text)}>Quantity: {cartItemQuantity}</p>
      <CartItemCounter cartItemId={cartItemId} />
    </>
  );
}
