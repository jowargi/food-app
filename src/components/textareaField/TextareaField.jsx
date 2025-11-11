import styles from "./TextareaField.module.css";
import classNames from "classnames";

export default function TextareaField({
  id,
  name,
  value,
  onChange,
  labelText,
}) {
  return (
    <div className={classNames(styles.container)}>
      <label htmlFor={id} className={classNames(styles.label)}>
        {labelText}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames(styles.textarea)}
      />
    </div>
  );
}
