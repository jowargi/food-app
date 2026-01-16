import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./DishSkeleton.module.css";
import classNames from "classnames";

export default function DishSkeleton() {
  const { themeColor } = useThemeColorContext();

  return (
    <section
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`],
      )}
    >
      <h2
        className={classNames(styles.title, styles[`title--${themeColor}`])}
      />
      <p className={classNames(styles.price, styles[`price--${themeColor}`])} />
      <p
        className={classNames(
          styles.ingredients,
          styles[`ingredients--${themeColor}`],
        )}
      />
      <a className={classNames(styles.link, styles[`link--${themeColor}`])} />
    </section>
  );
}
