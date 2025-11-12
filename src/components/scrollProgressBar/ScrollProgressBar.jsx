import { useScrollProgress } from "../../hooks/useScrollProgress";
import styles from "./ScrollProgressBar.module.css";

export default function ScrollProgressBar() {
  const scrollProgress = useScrollProgress();

  return (
    <div style={{ width: `${scrollProgress}vw` }} className={styles.bar} />
  );
}
