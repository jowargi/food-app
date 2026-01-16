import { useCallback, useReducer } from "react";

const INITIAL_POPUP_RECT_STATE = {
  isHidden: true,
  width: 0,
  left: 0,
  top: 0,
};

const SHOW_POPUP_ACTION = "showPopup";
const HIDE_POPUP_ACTION = "hidePopup";
const SET_WIDTH_ACTION = "setWidth";
const SET_LEFT_ACTION = "setLeft";
const SET_TOP_ACTION = "setTop";
const RESET_WIDTH_ACTION = "resetWidth";
const RESET_OFFSET_ACTION = "resetOffset";
const RESET_ACTION = "reset";

const reducer = (popupRectState, { type, payload }) => {
  switch (type) {
    case SHOW_POPUP_ACTION:
      return { ...popupRectState, isHidden: false };

    case HIDE_POPUP_ACTION:
      return { ...popupRectState, isHidden: true };

    case SET_WIDTH_ACTION:
      return { ...popupRectState, width: payload };

    case SET_LEFT_ACTION:
      return { ...popupRectState, left: payload };

    case SET_TOP_ACTION:
      return { ...popupRectState, top: payload };

    case RESET_WIDTH_ACTION:
      return { ...popupRectState, width: INITIAL_POPUP_RECT_STATE.width };

    case RESET_OFFSET_ACTION:
      return {
        ...popupRectState,
        left: INITIAL_POPUP_RECT_STATE.left,
        top: INITIAL_POPUP_RECT_STATE.top,
      };

    case RESET_ACTION:
      return { ...INITIAL_POPUP_RECT_STATE };

    default:
      return popupRectState;
  }
};

export const usePopupRect = () => {
  const [popupRectState, dispatch] = useReducer(
    reducer,
    INITIAL_POPUP_RECT_STATE,
  );

  const showPopup = useCallback(
    () => dispatch({ type: SHOW_POPUP_ACTION }),
    [],
  );

  const hidePopup = useCallback(
    () => dispatch({ type: HIDE_POPUP_ACTION }),
    [],
  );

  const setWidth = useCallback(
    (width) => dispatch({ type: SET_WIDTH_ACTION, payload: width }),
    [],
  );

  const setLeft = useCallback(
    (left) => dispatch({ type: SET_LEFT_ACTION, payload: left }),
    [],
  );

  const setTop = useCallback(
    (top) => dispatch({ type: SET_TOP_ACTION, payload: top }),
    [],
  );

  const resetWidth = useCallback(
    () => dispatch({ type: RESET_WIDTH_ACTION }),
    [],
  );

  const resetOffset = useCallback(
    () => dispatch({ type: RESET_OFFSET_ACTION }),
    [],
  );

  const reset = useCallback(() => dispatch({ type: RESET_ACTION }), []);

  return {
    popupRectState,
    showPopup,
    hidePopup,
    setWidth,
    setLeft,
    setTop,
    resetWidth,
    resetOffset,
    reset,
  };
};
