import { useCallback, useEffect, useRef } from "react";
import styles from "./useTooltip.module.css";
import classNames from "classnames";

export const useTooltip = ({ content, themeColor = "light" }) => {
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  const addTooltip = useCallback(
    (target) => {
      if (tooltipRef.current) return;

      if (targetRef.current) return;

      tooltipRef.current = document.createElement("div");

      tooltipRef.current.innerHTML = content;
      tooltipRef.current.className = classNames(
        styles.tooltip,
        styles[`tooltip--${themeColor}`],
      );

      targetRef.current = target;

      if (!targetRef.current.classList.contains(styles.target))
        targetRef.current.classList.add(styles.target);

      targetRef.current.append(tooltipRef.current);
    },
    [content, themeColor],
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

  useEffect(
    () => () => {
      removeTooltip();
    },
    [removeTooltip],
  );

  return {
    tooltipRef,
    addTooltip,
    removeTooltip,
  };
};
