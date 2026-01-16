import { useCallback, useEffect } from "react";
import { useTooltip } from "./useTooltip/useTooltip";
import { HoverIntent } from "../hoverIntent/HoverIntent";

export const useRestaurantCarouselListItemTooltip = ({
  elementRef,
  content,
  themeColor = "light",
}) => {
  const { tooltipRef, addTooltip, removeTooltip } = useTooltip({
    content,
    themeColor,
  });

  const onPointerMove = useCallback(
    (event) => {
      event.stopPropagation();

      if (!tooltipRef.current) return;

      const target = event.currentTarget;
      const targetRect = target.getBoundingClientRect();
      const tooltipLeft = event.clientX - targetRect.left - target.clientLeft;
      const tooltipTop = event.clientY - targetRect.top - target.clientTop;

      tooltipRef.current.style.left = tooltipLeft + 10 + "px";
      tooltipRef.current.style.top = tooltipTop + 10 + "px";
    },
    [tooltipRef],
  );

  const onPointerCancel = useCallback(
    (event) => {
      event.stopPropagation();

      removeTooltip();
    },
    [removeTooltip],
  );

  useEffect(() => {
    const hoverIntent = new HoverIntent({
      element: elementRef.current,

      over: function (lastPointerMoveEvent) {
        if (!lastPointerMoveEvent) return;

        addTooltip(this);

        this.addEventListener("pointermove", onPointerMove);
        this.addEventListener("pointercancel", onPointerCancel);

        this.dispatchEvent(lastPointerMoveEvent);
      },

      out: function () {
        removeTooltip();

        this.removeEventListener("pointermove", onPointerMove);
        this.removeEventListener("pointercancel", onPointerCancel);
      },
    });

    const cleanup = function () {
      hoverIntent.destroy();

      this.removeEventListener("pointermove", onPointerMove);
      this.removeEventListener("pointercancel", onPointerCancel);
    };

    return cleanup.bind(elementRef.current);
  }, [elementRef, addTooltip, removeTooltip, onPointerMove, onPointerCancel]);
};
