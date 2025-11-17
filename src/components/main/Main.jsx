import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import classNames from "classnames";
import { useMainMinHeight } from "../../hooks/useMainMinHeight";

export default function Main() {
  const mainRef = useMainMinHeight();
  const { themeColor } = useThemeColorContext();

  return (
    <main
      ref={mainRef}
      className={classNames(styles.main, styles[`main--${themeColor}`])}
    >
      <Outlet />
    </main>
  );
}
