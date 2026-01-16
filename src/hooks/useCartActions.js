import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectUserCartItemQuantity,
} from "../redux/slices/cart/slice";
import { useCallback } from "react";

export const useCartActions = ({ userId, dishId }) => {
  const dispatch = useDispatch();

  const count = useSelector((state) =>
    selectUserCartItemQuantity(state, userId, dishId),
  );

  const increment = useCallback(
    () => dispatch(addToCart({ userId, dishId })),
    [dispatch, userId, dishId],
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart({ userId, dishId })),
    [dispatch, userId, dishId],
  );

  return { count, increment, decrement };
};
