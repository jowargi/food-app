import classNames from "classnames";
import EditableReview from "../editableReview/EditableReview";
import styles from "./ReviewListItem.module.css";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function ReviewListItem() {
  const { themeColor } = useThemeColorContext();

  return (
    <li className={classNames(styles.item, styles[`item--${themeColor}`])}>
      <EditableReview />
    </li>
  );
}
