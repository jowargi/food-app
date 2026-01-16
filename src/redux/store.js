import { configureStore } from "@reduxjs/toolkit";
import { authorizedUsersSlice } from "./slices/authorizedUsers/slice";
import { requestsSlice } from "./slices/requests/slice";
import { reviewsApi } from "./api/reviews/api";
import { dishesApi } from "./api/dishes/api";
import { cartSlice } from "./slices/cart/slice";
import { usersApi } from "./api/users/api";
import { restaurantsApi } from "./api/restaurants/api";
import { restaurantsWithImageSlice } from "./slices/restaurantsWithImage/slice";

export const store = configureStore({
  reducer: {
    [requestsSlice.name]: requestsSlice.reducer,
    [authorizedUsersSlice.name]: authorizedUsersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [restaurantsWithImageSlice.name]: restaurantsWithImageSlice.reducer,
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    [dishesApi.reducerPath]: dishesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      restaurantsApi.middleware,
      dishesApi.middleware,
      reviewsApi.middleware,
      usersApi.middleware,
    ),
});
