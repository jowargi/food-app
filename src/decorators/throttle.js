export const throttle = (func, ms) => {
  let isThrottled = false,
    savedArgs = null,
    savedThis = null;

  return function throttledFunc() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;

      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    throttledFunc.timeout = setTimeout(() => {
      isThrottled = false;

      if (savedArgs) throttledFunc.apply(savedThis, savedArgs);

      savedArgs = savedThis = null;
    }, ms);
  };
};
