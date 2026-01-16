import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const authorizedUsersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

export const authorizedUsersSlice = createSlice({
  name: "authorizedUser",
  initialState: authorizedUsersAdapter.getInitialState(),

  reducers: {
    addAuthorizedUser: (state, { payload }) => {
      authorizedUsersAdapter.addOne(state, payload);
    },
  },
});

export const { addAuthorizedUser } = authorizedUsersSlice.actions;

export const { selectById: selectAuthorizedUserById } =
  authorizedUsersAdapter.getSelectors(
    (state) => state[authorizedUsersSlice.name],
  );
