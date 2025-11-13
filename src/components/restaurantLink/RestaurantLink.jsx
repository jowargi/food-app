import { createContext, useContext, useEffect, useRef } from "react";
import { usePopup } from "../../hooks/usePopup";
import RouterLink from "../routerLink/RouterLink";
import { HoverIntent } from "../../hoverIntent/HoverIntent";
import RestaurantDescriptionPopupContainer from "../restaurantDescriptionPopup/RestaurantDescriptionPopupContainer";

const PopupRectContext = createContext({
  popupWidth: null,
  popupLeft: null,
  popupTop: null,
});

export const usePopupRectContext = () => useContext(PopupRectContext);

export default function RestaurantLink({ restaurantId, restaurantName }) {
  const { popupRectState, addPopup, removePopup, onPointerCancel, onClick } =
    usePopup();

  const linkRef = useRef(null);

  useEffect(() => {
    const hoverIntent = new HoverIntent({
      element: linkRef.current,

      over: function () {
        addPopup(this);
      },

      out: () => removePopup(),
    });

    return () => {
      hoverIntent.destroy();
    };
  }, [addPopup, removePopup]);

  return (
    <>
      <RouterLink
        to={`/restaurants/${restaurantId}`}
        ref={linkRef}
        onPointerCancel={onPointerCancel}
        onClick={onClick}
      >
        {restaurantName}
      </RouterLink>
      {!popupRectState.isHidden && (
        <PopupRectContext.Provider
          value={{
            popupWidth: popupRectState.width,
            popupLeft: popupRectState.left,
            popupTop: popupRectState.top,
          }}
        >
          <RestaurantDescriptionPopupContainer restaurantId={restaurantId} />
        </PopupRectContext.Provider>
      )}
    </>
  );
}
