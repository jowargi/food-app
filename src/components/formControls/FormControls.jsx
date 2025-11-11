import Button from "../button/Button";
import styles from "./FormControls.module.css";
import classNames from "classnames";

export default function FormControls({ onClear, isDisabled }) {
  return (
    <div className={classNames(styles.container)}>
      <Button onClick={onClear} isDisabled={isDisabled}>
        Clear
      </Button>
      <Button type="submit" isDisabled={isDisabled}>
        Submit
      </Button>
    </div>
  );
}
