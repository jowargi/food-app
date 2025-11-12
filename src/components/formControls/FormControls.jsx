import Button from "../button/Button";
import styles from "./FormControls.module.css";

export default function FormControls({ onClear, isDisabled }) {
  return (
    <div className={styles.container}>
      <Button onClick={onClear} isDisabled={isDisabled}>
        Clear
      </Button>
      <Button type="submit" isDisabled={isDisabled}>
        Submit
      </Button>
    </div>
  );
}
