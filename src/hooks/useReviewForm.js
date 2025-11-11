import { useSelector } from "react-redux";
import { useAuthorizedUserIdContext } from "../components/authorizedUserIdContextProvider/AuthorizedUserIdContextProvider";
import { selectAuthorizedUserById } from "../redux/slices/authorizedUsers/slice";
import { useCallback, useReducer } from "react";

const INITIAL_FORM_STATE = { text: "", rating: 1 };

const SET_TEXT_ACTION = "setText";
const INCREMENT_RATING_ACTION = "incrementRating";
const DECREMENT_RATING_ACTION = "decrementRating";
const CLEAR_ACTION = "clear";

const reducer = (formState, { type, payload }) => {
  switch (type) {
    case SET_TEXT_ACTION:
      return { ...formState, text: payload };

    case INCREMENT_RATING_ACTION:
      return { ...formState, rating: Math.min(formState.rating + 1, 5) };

    case DECREMENT_RATING_ACTION:
      return { ...formState, rating: Math.max(formState.rating - 1, 1) };

    case CLEAR_ACTION:
      return { ...INITIAL_FORM_STATE };

    default:
      return formState;
  }
};

export const useReviewForm = () => {
  const { authorizedUserId } = useAuthorizedUserIdContext();

  const authorizedUser = useSelector((state) =>
    selectAuthorizedUserById(state, authorizedUserId)
  );

  const [formState, dispatch] = useReducer(reducer, INITIAL_FORM_STATE);

  const safeDispatch = useCallback(
    (action) => {
      if (!authorizedUser) return;

      dispatch(action);
    },
    [authorizedUser]
  );

  const setText = useCallback(
    (text) => safeDispatch({ type: SET_TEXT_ACTION, payload: text }),
    [safeDispatch]
  );

  const incrementRating = useCallback(
    () => safeDispatch({ type: INCREMENT_RATING_ACTION }),
    [safeDispatch]
  );

  const decrementRating = useCallback(
    () => safeDispatch({ type: DECREMENT_RATING_ACTION }),
    [safeDispatch]
  );

  const clear = useCallback(
    () => safeDispatch({ type: CLEAR_ACTION }),
    [safeDispatch]
  );

  return { formState, setText, incrementRating, decrementRating, clear };
};
