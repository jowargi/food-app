import { useEffect, useRef } from "react";

export const useMainMinHeight = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const header = document.body.querySelector("header");
    const footer = document.body.querySelector("footer");

    const headerHeight = parseFloat(getComputedStyle(header).height);
    const headerMarginTop = parseFloat(getComputedStyle(header).marginTop);
    const headerMarginBottom = parseFloat(
      getComputedStyle(header).marginBottom
    );
    const footerHeight = parseFloat(getComputedStyle(footer).height);
    const footerMarginTop = parseFloat(getComputedStyle(footer).marginTop);
    const footerMarginBottom = parseFloat(
      getComputedStyle(footer).marginBottom
    );

    const mainMinHeight =
      document.documentElement.clientHeight -
      (headerHeight +
        headerMarginTop +
        headerMarginBottom +
        footerHeight +
        footerMarginTop +
        footerMarginBottom);

    const main = mainRef.current;

    main.style.minHeight = `${mainMinHeight}px`;
  }, []);

  return mainRef;
};
