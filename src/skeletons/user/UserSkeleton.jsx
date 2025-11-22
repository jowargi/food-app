import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./UserSkeleton.module.css";
import classNames from "classnames";

export default function UserSkeleton() {
  const { themeColor } = useThemeColorContext();

  return (
    <h5 className={classNames(styles.title, styles[`title--${themeColor}`])} />
  );
}
