import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";
import classNames from "classnames";

export default function Main() {
  return (
    <main className={classNames(styles.main)}>
      <Outlet />
    </main>
  );
}
