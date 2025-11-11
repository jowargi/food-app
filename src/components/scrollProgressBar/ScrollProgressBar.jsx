import { useScrollProgress } from "../../hooks/useScrollProgress";
import styles from "./ScrollProgressBar.module.css";
import classNames from "classnames";

export default function ScrollProgressBar() {
  const scrollProgress = useScrollProgress();

  return (
    <div
      style={{ width: `${scrollProgress}vw` }}
      className={classNames(styles.bar)}
    />
  );
}
