import { useCallback, useEffect, useRef } from "react";
import { usePopupRect } from "./usePopupRect";

const getElementPageOffset = (element) => {
  const rect = element.getBoundingClientRect();

  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
  };
};

export const usePopup = () => {
  const { popupRectState, showPopup, setWidth, setLeft, setTop, reset } =
    usePopupRect();

  const isPopupHiddenRef = useRef(null);

  isPopupHiddenRef.current = popupRectState.isHidden;

  const addPopup = useCallback(
    (target) => {
      if (!isPopupHiddenRef.current) return;

      const targetPageOffset = getElementPageOffset(target);

      const popupWidth =
        10 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      const popupLeft =
        targetPageOffset.left + target.offsetWidth / 2 - popupWidth / 2;
      const popupTop = targetPageOffset.top + target.offsetHeight;

      showPopup();
      setWidth(popupWidth);
      setLeft(popupLeft);
      setTop(popupTop);
    },
    [showPopup, setWidth, setLeft, setTop]
  );

  const removePopup = useCallback(() => {
    if (isPopupHiddenRef.current) return;

    reset();
  }, [reset]);

  const onPointerCancel = useCallback(
    (event) => {
      event.stopPropagation();

      removePopup();
    },
    [removePopup]
  );

  const onClick = useCallback(() => removePopup(), [removePopup]);

  useEffect(() => () => removePopup(), [removePopup]);

  return { popupRectState, addPopup, removePopup, onPointerCancel, onClick };
};
