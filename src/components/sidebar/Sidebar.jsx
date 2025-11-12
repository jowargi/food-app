import CartToggle from "../cartToggle/CartToggle";
import { useSidebarContext } from "../layout/Layout";
import RouterLink from "../routerLink/RouterLink";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { isSidebarVisible } = useSidebarContext();

  return (
    isSidebarVisible && (
      <aside className={styles.aside}>
        <div className={styles.container}>
          <RouterLink to="/restaurants">Restaurants</RouterLink>
          <CartToggle />
        </div>
      </aside>
    )
  );
}
