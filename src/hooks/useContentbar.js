import { useEffect, useRef, useState } from "react";

export const useContentbar = () => {
  const [isContentbarVisible, setIsContentbarVisible] = useState(false);

  const isContentbarVisibleRef = useRef(null);

  isContentbarVisibleRef.current = isContentbarVisible;

  useEffect(() => {
    const onResize = () => {
      const windowWidth = document.documentElement.clientWidth;
      const isContentbarVisible = isContentbarVisibleRef.current;

      if (windowWidth < 1024 && !isContentbarVisible)
        setIsContentbarVisible(true);
      else if (windowWidth >= 1024 && isContentbarVisible)
        setIsContentbarVisible(false);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isContentbarVisible;
};
