import CartToggle from "../cartToggle/CartToggle";
import { useSidebarContext } from "../layout/Layout";
import RouterLink from "../routerLink/RouterLink";
import styles from "./Sidebar.module.css";
import classNames from "classnames";

export default function Sidebar() {
  const { isSidebarVisible } = useSidebarContext();

  return (
    isSidebarVisible && (
      <aside className={classNames(styles.aside)}>
        <div className={classNames(styles.container)}>
          <RouterLink to="/restaurants">Restaurants</RouterLink>
          <CartToggle />
        </div>
      </aside>
    )
  );
}
