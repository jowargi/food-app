import classNames from "classnames";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ScrollProgressBar.module.css";

export default function ScrollProgressBar() {
  const scrollProgress = useScrollProgress();

  const { themeColor } = useThemeColorContext();

  return (
    <div
      style={{ width: `${scrollProgress}vw` }}
      className={classNames(styles.bar, styles[`bar--${themeColor}`])}
    />
  );
}
