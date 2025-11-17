import { NavLink } from "react-router-dom";
import styles from "./RouterLink.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function RouterLink({
  children,
  to,
  ref,
  onPointerCancel,
  onClick,
  style,
}) {
  const { themeColor } = useThemeColorContext();

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, styles[`link--${themeColor}`], {
          [styles[`link--active--${themeColor}`]]: isActive,
        })
      }
      style={style}
      ref={ref}
      onPointerCancel={onPointerCancel}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}
