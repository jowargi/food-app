import { useCallback, useEffect, useRef } from "react";
import styles from "./useTooltip.module.css";

export const useTooltip = (content) => {
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  const addTooltip = useCallback(
    (target) => {
      if (tooltipRef.current) return;

      if (targetRef.current) return;

      tooltipRef.current = document.createElement("div");

      tooltipRef.current.innerHTML = content;
      tooltipRef.current.className = styles.tooltip;

      targetRef.current = target;

      if (!targetRef.current.classList.contains(styles.target))
        targetRef.current.classList.add(styles.target);

      targetRef.current.append(tooltipRef.current);
    },
    [content]
  );

  const removeTooltip = useCallback(() => {
    if (!tooltipRef.current) return;

    if (!targetRef.current) return;

    tooltipRef.current.remove();

    tooltipRef.current = null;

    if (targetRef.current.classList.contains(styles.target))
      targetRef.current.classList.remove(styles.target);

    targetRef.current = null;
  }, []);

  const onPointerMove = useCallback((event) => {
    event.stopPropagation();

    if (!tooltipRef.current) return;

    const target = event.currentTarget;
    const targetRect = target.getBoundingClientRect();
    const tooltipLeft = event.clientX - targetRect.left - target.clientLeft;
    const tooltipTop = event.clientY - targetRect.top - target.clientTop;

    tooltipRef.current.style.left = tooltipLeft + 10 + "px";
    tooltipRef.current.style.top = tooltipTop + 10 + "px";
  }, []);

  const onPointerCancel = useCallback(
    (event) => {
      event.stopPropagation();

      removeTooltip();
    },
    [removeTooltip]
  );

  useEffect(
    () => () => {
      removeTooltip();
    },
    [removeTooltip]
  );

  return {
    addTooltip,
    removeTooltip,
    onPointerMove,
    onPointerCancel,
  };
};
