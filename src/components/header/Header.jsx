import { useNavigate } from "react-router-dom";
import AuthStatusControl from "../authStatusControl/AuthStatusControl";
import CartToggle from "../cartToggle/CartToggle";
import SidebarToggle from "../sidebarToggle/SidebarToggle";
import ThemeColorToggle from "../themeColorToggle/ThemeColorToggle";
import styles from "./Header.module.css";
import classNames from "classnames";
import { useCallback } from "react";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function Header() {
  const navigate = useNavigate();

  const onPointerDown = useCallback((event) => event.preventDefault(), []);
  const onClick = useCallback(() => navigate("/"), [navigate]);

  const { themeColor } = useThemeColorContext();

  return (
    <header
      className={classNames(
        styles.header,
        "clearfix",
        styles[`header--${themeColor}`]
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
        <SidebarToggle />
      </div>
    </header>
  );
}
