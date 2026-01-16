import { createContext, useContext, useRef } from "react";
import RouterLink from "../routerLink/RouterLink";
import RestaurantDescriptionPopupContainer from "../restaurantDescriptionPopup/RestaurantDescriptionPopupContainer";
import { useRestaurantLinkPopup } from "../../hooks/useRestaurantLinkPopup";

const PopupRectContext = createContext({
  popupWidth: null,
  popupLeft: null,
  popupTop: null,
});

export const usePopupRectContext = () => useContext(PopupRectContext);

export default function RestaurantLink({ restaurantId, restaurantName }) {
  const linkRef = useRef(null);

  const { popupRectState, onPointerCancel, onClick } =
    useRestaurantLinkPopup(linkRef);

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
