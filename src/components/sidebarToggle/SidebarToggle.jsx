import { useThrottle } from "../../hooks/useThrottle";
import Button from "../button/Button";
import { useSidebarContext } from "../sidebarContextProvider/SidebarContextProvider";

export default function SidebarToggle() {
  const { isSidebarVisible, showSidebar, hideSidebar } = useSidebarContext();

  let toggleSidebar = () => (isSidebarVisible ? hideSidebar() : showSidebar());

  toggleSidebar = useThrottle(toggleSidebar, 300);

  return (
    <Button onClick={toggleSidebar}>
      {isSidebarVisible ? <span>&#10006;</span> : <span>&#9776;</span>}
    </Button>
  );
}
