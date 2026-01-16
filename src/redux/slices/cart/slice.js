import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    byUserId: {},
    userIds: [],
  },

  reducers: {
    addToCart: (state, { payload }) => {
      const { userId, dishId } = payload;

      if (!state.userIds.includes(userId)) {
        state.byUserId[userId] = {};

        state.userIds.push(userId);
      }

      state.byUserId[userId][dishId] =
        (state.byUserId[userId][dishId] || 0) + 1;
    },

    removeFromCart: (state, { payload }) => {
      const { userId, dishId } = payload;

      if (!state.byUserId[userId]?.[dishId]) return state;

      state.byUserId[userId][dishId] -= 1;

      if (state.byUserId[userId][dishId] <= 0)
        delete state.byUserId[userId][dishId];
    },
  },

  selectors: {
    selectUserCartItemQuantity: (state, userId, dishId) =>
      state.byUserId[userId]?.[dishId] || 0,
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectUserCartItemIds = createSelector(
  [(globalState) => globalState[cartSlice.name], (_, userId) => userId],
  (state, userId) => {
    const userCart = state.byUserId[userId];

    return userCart ? Object.keys(userCart) : [];
  },
);

export const { selectUserCartItemQuantity } = cartSlice.selectors;
