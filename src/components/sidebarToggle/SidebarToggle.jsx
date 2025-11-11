import { useThrottle } from "../../hooks/useThrottle";
import Button from "../button/Button";
import { useSidebarContext } from "../layout/Layout";

export default function SidebarToggle() {
  const { isSidebarVisible, setIsSidebarVisible } = useSidebarContext();

  let toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  toggleSidebar = useThrottle(toggleSidebar, 300);

  return (
    <Button onClick={toggleSidebar}>
      {isSidebarVisible ? <span>&#10006;</span> : <span>&#9776;</span>}
    </Button>
  );
}
