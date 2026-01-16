import { createPortal } from "react-dom";

export default function LayoutComponentModal({ children, style }) {
  return createPortal(
    <div style={style}>{children}</div>,
    document.getElementById("modal"),
  );
}
