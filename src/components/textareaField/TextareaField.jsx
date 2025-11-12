import styles from "./TextareaField.module.css";

export default function TextareaField({
  id,
  name,
  value,
  onChange,
  labelText,
}) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.textarea}
      />
    </div>
  );
}
