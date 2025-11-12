import CartItemCounter from "../cartItemCounter/CartItemCounter";
import styles from "./CartItem.module.css";

export default function CartItem({ cartItemId, cartItemQuantity, dishName }) {
  return (
    <>
      <h3 className={styles.title}>{dishName}</h3>
      <p className={styles.text}>Quantity: {cartItemQuantity}</p>
      <CartItemCounter cartItemId={cartItemId} />
    </>
  );
}
