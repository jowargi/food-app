import { createPortal } from "react-dom";
import { withAuthorized } from "../../hocs/withAuthorized";
import { useCartModalContext } from "../cartModalContextProvider/CartModalContextProvider";
import { useEffect } from "react";
import styles from "./CartModal.module.css";
import classNames from "classnames";

const CartModalAuthorized = ({ children }) => {
  const { isCartVisible } = useCartModalContext();

  useEffect(() => {
    if (isCartVisible) document.documentElement.style.overflow = "hidden";

    return () => (document.documentElement.style.overflow = "");
  }, [isCartVisible]);

  return (
    isCartVisible &&
    createPortal(
      <div className={classNames(styles.overlay)}>
        <div className={classNames(styles.content)}>{children}</div>
      </div>,
      document.getElementById("modal")
    )
  );
};

const CartModal = withAuthorized({ AuthorizedComponent: CartModalAuthorized });

export default CartModal;
