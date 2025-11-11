import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import { useThrottle } from "../../hooks/useThrottle";
import Button from "../button/Button";

export default function ThemeColorToggle() {
  const { themeColor, setLightTheme, setDarkTheme } = useThemeColorContext();

  let toggleThemeColor = () =>
    themeColor === "light" ? setDarkTheme() : setLightTheme();

  toggleThemeColor = useThrottle(toggleThemeColor, 300);

  return (
    <Button onClick={toggleThemeColor}>
      {themeColor === "light" ? "☾" : themeColor === "dark" ? "☀" : "◑"}
    </Button>
  );
}
