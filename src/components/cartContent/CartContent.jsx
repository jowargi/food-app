import { withCartItemsCheck } from "../../hocs/withCartItemsCheck";
import CartItemContainer from "../cartItem/CartItemContainer";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./CartContent.module.css";
import classNames from "classnames";

const CartItemsList = ({ cartItemIds }) => {
  const { themeColor } = useThemeColorContext();

  return (
    <ul className={classNames(styles.list, styles[`list--${themeColor}`])}>
      {cartItemIds.map((cartItemId) => (
        <li
          key={cartItemId}
          className={classNames(styles.item, styles[`item--${themeColor}`])}
        >
          <CartItemContainer cartItemId={cartItemId} />
        </li>
      ))}
    </ul>
  );
};

const EmptyCartMessage = () => {
  const { themeColor } = useThemeColorContext();

  return (
    <p className={classNames(styles.text, styles[`text--${themeColor}`])}>
      Your shopping cart is empty!
    </p>
  );
};

const CartContent = withCartItemsCheck({
  CartItemsList,
  EmptyCartMessage,
});

export default CartContent;
