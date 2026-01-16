import { useCallback, useEffect } from "react";
import { usePopup } from "./usePopup";
import { HoverIntent } from "../hoverIntent/HoverIntent";

export const useRestaurantLinkPopup = (elementRef) => {
  const { popupRectState, addPopup, removePopup } = usePopup();

  const onPointerCancel = useCallback(
    (event) => {
      event.stopPropagation();

      removePopup();
    },
    [removePopup],
  );

  const onClick = useCallback(() => removePopup(), [removePopup]);

  useEffect(() => {
    const hoverIntent = new HoverIntent({
      element: elementRef.current,

      over: function () {
        addPopup(this);
      },

      out: () => removePopup(),
    });

    return () => {
      hoverIntent.destroy();
    };
  }, [elementRef, addPopup, removePopup]);

  return { popupRectState, onPointerCancel, onClick };
};
