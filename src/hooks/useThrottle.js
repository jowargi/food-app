import { useCallback, useEffect, useRef } from "react";

export const useThrottle = (func, ms) => {
  const throttleRef = useRef({
    timeout: null,
    func: null,
    throttledFunc: null,
    isThrottled: false,
    savedArgs: null,
    savedThis: null,
  });

  useEffect(() => {
    const current = throttleRef.current;

    return () => {
      clearTimeout(current.timeout);
    };
  }, []);

  useEffect(() => {
    throttleRef.current.func = func;
  }, [func]);

  const throttledFunc = useCallback(
    function () {
      const { func, isThrottled } = throttleRef.current;

      if (isThrottled) {
        throttleRef.current.savedArgs = arguments;
        throttleRef.current.savedThis = this;

        return;
      }

      func.apply(this, arguments);

      throttleRef.current.isThrottled = true;

      throttleRef.current.timeout = setTimeout(() => {
        throttleRef.current.isThrottled = false;

        const { throttledFunc, savedArgs, savedThis } = throttleRef.current;

        if (savedArgs) {
          throttledFunc.apply(savedThis, savedArgs);

          throttleRef.current.savedArgs = throttleRef.current.savedThis = null;
        }
      }, ms);
    },
    [ms],
  );

  useEffect(() => {
    throttleRef.current.throttledFunc = throttledFunc;
  }, [throttledFunc]);

  return throttledFunc;
};
