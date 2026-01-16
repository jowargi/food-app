import { useCallback, useEffect, useRef } from "react";

export const useTimeout = () => {
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const clearTimer = useCallback(() => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = null;
  }, []);

  const setTimer = useCallback(
    (func, ms) => {
      clearTimer();

      timeoutRef.current = setTimeout(func, ms);
    },
    [clearTimer],
  );

  return { setTimer, clearTimer };
};
