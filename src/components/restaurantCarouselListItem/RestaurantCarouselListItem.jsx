import { useCallback, useEffect, useRef } from "react";
import styles from "./RestaurantCarouselListItem.module.css";
import { useNavigate } from "react-router-dom";
import { useTooltip } from "../../hooks/useTooltip/useTooltip";
import { HoverIntent } from "../../hoverIntent/HoverIntent";

export default function RestaurantCarouselListItem({
  restaurantId,
  restaurantName,
  imageUrl,
}) {
  const navigate = useNavigate();

  const onClick = useCallback(
    () => navigate(`/restaurants/${restaurantId}`),
    [navigate, restaurantId]
  );

  const { addTooltip, removeTooltip, onPointerMove, onPointerCancel } =
    useTooltip(restaurantName);

  const itemRef = useRef(null);

  useEffect(() => {
    const hoverIntent = new HoverIntent({
      element: itemRef.current,

      over: function (lastPointerMoveEvent) {
        if (!lastPointerMoveEvent) return;

        addTooltip(this);

        this.addEventListener("pointermove", onPointerMove);
        this.addEventListener("pointercancel", onPointerCancel);

        this.dispatchEvent(lastPointerMoveEvent);
      },

      out: function () {
        removeTooltip();

        this.removeEventListener("pointermove", onPointerMove);
        this.removeEventListener("pointercancel", onPointerCancel);
      },
    });

    const cleanup = function () {
      hoverIntent.destroy();

      this.removeEventListener("pointermove", onPointerMove);
      this.removeEventListener("pointercancel", onPointerCancel);
    };

    return cleanup.bind(itemRef.current);
  }, [addTooltip, removeTooltip, onPointerMove, onPointerCancel]);

  return (
    <li ref={itemRef} onClick={onClick} className={styles.item}>
      <img
        src={imageUrl}
        onDragStart={(event) => event.preventDefault()}
        className={styles.img}
      />
    </li>
  );
}
