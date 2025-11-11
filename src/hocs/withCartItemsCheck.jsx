export const withCartItemsCheck = ({ CartItemsList, EmptyCartMessage }) => {
  return (props) => {
    const { cartItemIds } = props;

    if (!cartItemIds?.length)
      return EmptyCartMessage ? <EmptyCartMessage {...props} /> : null;

    return CartItemsList ? <CartItemsList {...props} /> : null;
  };
};
