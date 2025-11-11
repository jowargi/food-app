import { useCallback } from "react";
import Button from "../button/Button";
import { useCartModalContext } from "../cartModalContextProvider/CartModalContextProvider";
import styles from "./Cart.module.css";
import classNames from "classnames";
import CartContent from "../cartContent/CartContent";

export default function Cart({ cartItemIds }) {
  const { closeCart } = useCartModalContext();

  const onClick = useCallback(() => closeCart(), [closeCart]);

  return (
    <section
      className={classNames(styles.container)}
      style={{ position: "relative" }}
    >
      <Button
        onClick={onClick}
        style={{ position: "absolute", right: "1rem", top: "1rem" }}
      >
        <span>&#10006;</span>
      </Button>
      <h2 className={classNames(styles.title)}>Shopping cart</h2>
      <CartContent cartItemIds={cartItemIds} />
    </section>
  );
}
