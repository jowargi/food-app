import { useNavigate } from "react-router-dom";
import AuthStatusControl from "../authStatusControl/AuthStatusControl";
import CartToggle from "../cartToggle/CartToggle";
import SidebarToggle from "../sidebarToggle/SidebarToggle";
import ThemeColorToggle from "../themeColorToggle/ThemeColorToggle";
import styles from "./Header.module.css";
import classNames from "classnames";
import { useCallback, useMemo } from "react";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import { withResponsiveVisibility } from "../../hocs/withResponsiveVisibility";
import { useSidebarContext } from "../sidebarContextProvider/SidebarContextProvider";

export default function Header() {
  const navigate = useNavigate();

  const onPointerDown = useCallback((event) => event.preventDefault(), []);
  const onClick = useCallback(() => navigate("/"), [navigate]);

  const { themeColor } = useThemeColorContext();

  const { isSidebarVisible, showSidebar, hideSidebar } = useSidebarContext();

  const ResponsiveSidebarToggle = useMemo(() => {
    return withResponsiveVisibility({
      DesktopComponent: SidebarToggle,
      breakpointWidth: 1024,
      desktopEffects: [() => !isSidebarVisible && showSidebar()],
      mobileEffects: [() => isSidebarVisible && hideSidebar()],
    });
  }, [isSidebarVisible, showSidebar, hideSidebar]);

  return (
    <header
      className={classNames(
        styles.header,
        "clearfix",
        styles[`header--${themeColor}`],
      )}
    >
      <h1
        onPointerDown={onPointerDown}
        onClick={onClick}
        className={classNames(styles.title, styles[`title--${themeColor}`])}
      >
        Food App
      </h1>
      <div className={styles.container}>
        <CartToggle />
        <AuthStatusControl />
        <ThemeColorToggle />
        <ResponsiveSidebarToggle />
      </div>
    </header>
  );
}
