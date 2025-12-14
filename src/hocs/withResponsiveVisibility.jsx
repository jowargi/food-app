import { useEffect, useRef, useState } from "react";

export const withResponsiveVisibility = ({
  DesktopComponent,
  MobileComponent,
  breakpointWidth,
  desktopEffects,
  mobileEffects,
}) => {
  return (props) => {
    const [isDesktopView, setIsDesktopView] = useState(true);

    const isDesktopViewRef = useRef(null);

    isDesktopViewRef.current = isDesktopView;

    useEffect(() => {
      const onResize = () => {
        const windowWidth = document.documentElement.clientWidth;
        const isDesktopView = isDesktopViewRef.current;

        if (windowWidth < breakpointWidth && isDesktopView) {
          setIsDesktopView(false);

          if (mobileEffects?.length)
            mobileEffects.forEach((effect) => effect());
        } else if (windowWidth >= breakpointWidth && !isDesktopView) {
          setIsDesktopView(true);

          if (desktopEffects?.length)
            desktopEffects.forEach((effect) => effect());
        }
      };

      onResize();

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, []);

    if (isDesktopView)
      return DesktopComponent ? <DesktopComponent {...props} /> : null;

    return MobileComponent ? <MobileComponent {...props} /> : null;
  };
};
