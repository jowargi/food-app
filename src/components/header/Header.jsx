import { useNavigate } from "react-router-dom";
import AuthStatusControl from "../authStatusControl/AuthStatusControl";
import CartToggle from "../cartToggle/CartToggle";
import SidebarToggle from "../sidebarToggle/SidebarToggle";
import ThemeColorToggle from "../themeColorToggle/ThemeColorToggle";
import styles from "./Header.module.css";
import classNames from "classnames";
import { useCallback } from "react";

export default function Header() {
  const navigate = useNavigate();

  const onPointerDown = useCallback((event) => event.preventDefault(), []);
  const onClick = useCallback(() => navigate("/"), [navigate]);

  return (
    <header className={classNames(styles.header, "clearfix")}>
      <h1
        onPointerDown={onPointerDown}
        onClick={onClick}
        className={styles.title}
      >
        Food App
      </h1>
      <div className={styles.container}>
        <CartToggle text={<span>&#128722;</span>} />
        <AuthStatusControl />
        <ThemeColorToggle />
        <SidebarToggle />
      </div>
    </header>
  );
}
