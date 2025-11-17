import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./User.module.css";
import classNames from "classnames";

export default function User({ userName }) {
  const { themeColor } = useThemeColorContext();

  return (
    <h5 className={classNames(styles.title, styles[`title--${themeColor}`])}>
      {userName}
    </h5>
  );
}
