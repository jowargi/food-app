import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./TextareaField.module.css";
import classNames from "classnames";

export default function TextareaField({
  id,
  name,
  value,
  onChange,
  labelText,
}) {
  const { themeColor } = useThemeColorContext();

  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        className={classNames(styles.label, styles[`label--${themeColor}`])}
      >
        {labelText}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames(
          styles.textarea,
          styles[`textarea--${themeColor}`]
        )}
      />
    </div>
  );
}
