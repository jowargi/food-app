import AuthStatusControl from "../authStatusControl/AuthStatusControl";
import CartToggle from "../cartToggle/CartToggle";
import SidebarToggle from "../sidebarToggle/SidebarToggle";
import ThemeColorToggle from "../themeColorToggle/ThemeColorToggle";
import styles from "./Header.module.css";
import classNames from "classnames";

export default function Header() {
  return (
    <header className={classNames(styles.header, "clearfix")}>
      <h1
        onPointerDown={(event) => event.preventDefault()}
        className={classNames(styles.title)}
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
