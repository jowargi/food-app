import { useEffect, useState } from "react";
import { throttle } from "../decorators/throttle";

const getScrollProgress = () => {
  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollProgress =
    totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;

  return scrollProgress;
};

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let onProgress = () => setScrollProgress(getScrollProgress());

    onProgress();

    onProgress = throttle(onProgress, 50);

    window.addEventListener("scroll", onProgress);
    window.addEventListener("resize", onProgress);

    return () => {
      clearTimeout(onProgress.timeout);

      window.removeEventListener("scroll", onProgress);
      window.removeEventListener("resize", onProgress);
    };
  }, []);

  return scrollProgress;
};
