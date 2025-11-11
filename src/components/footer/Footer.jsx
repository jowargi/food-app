import styles from "./Footer.module.css";
import classNames from "classnames";

export default function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <p className={classNames(styles.copyright)}>Copyright © 2025 Food App</p>
      <address className={classNames(styles.address)}>New York, USA</address>
    </footer>
  );
}
