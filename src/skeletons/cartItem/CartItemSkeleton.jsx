import styles from "./CartItemSkeleton.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";

export default function CartItemSkeleton() {
  const { themeColor } = useThemeColorContext();

  return (
    <>
      <h3
        className={classNames(styles.title, styles[`title--${themeColor}`])}
      />
      <p className={classNames(styles.text, styles[`text--${themeColor}`])} />
    </>
  );
}
