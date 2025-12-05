import CartToggle from "../cartToggle/CartToggle";
import RouterLink from "../routerLink/RouterLink";
import { useSidebarContext } from "../sidebarContextProvider/SidebarContextProvider";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./Sidebar.module.css";
import classNames from "classnames";

export default function Sidebar() {
  const { isSidebarVisible } = useSidebarContext();
  const { themeColor } = useThemeColorContext();

  return (
    isSidebarVisible && (
      <aside
        className={classNames(styles.aside, styles[`aside--${themeColor}`])}
      >
        <div
          className={classNames(
            styles.container,
            styles[`container--${themeColor}`]
          )}
        >
          <RouterLink to="/restaurants">Restaurants</RouterLink>
          <CartToggle />
        </div>
      </aside>
    )
  );
}
