import { useEffect, useRef, useState } from "react";
import { useSidebarContext } from "../components/layout/Layout";

export const useSidebarToggle = () => {
  const [isSidebarToggleVisible, setIsSidebarToggleVisible] = useState(true);

  const isSidebarToggleVisibleRef = useRef(null);

  isSidebarToggleVisibleRef.current = isSidebarToggleVisible;

  const { isSidebarVisible, setIsSidebarVisible } = useSidebarContext();

  const isSidebarVisibleRef = useRef(null);

  isSidebarVisibleRef.current = isSidebarVisible;

  useEffect(() => {
    const onResize = () => {
      const windowWidth = document.documentElement.clientWidth;
      const isSidebarToggleVisible = isSidebarToggleVisibleRef.current;
      const isSidebarVisible = isSidebarVisibleRef.current;

      if (windowWidth < 1024 && isSidebarToggleVisible) {
        setIsSidebarToggleVisible(false);

        if (isSidebarVisible) setIsSidebarVisible(false);
      } else if (windowWidth >= 1024 && !isSidebarToggleVisible) {
        setIsSidebarToggleVisible(true);
      }
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setIsSidebarVisible]);

  return isSidebarToggleVisible;
};
