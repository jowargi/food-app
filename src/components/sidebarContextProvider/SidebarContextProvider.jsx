import { createContext, useCallback, useContext, useState } from "react";

const SidebarContext = createContext({
  isSidebarVisible: null,
  showSidebar: () => null,
  hideSidebar: () => null,
});

export const useSidebarContext = () => useContext(SidebarContext);

export default function SidebarContextProvider({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = useCallback(() => setIsSidebarVisible(true), []);
  const hideSidebar = useCallback(() => setIsSidebarVisible(false), []);

  return (
    <SidebarContext.Provider
      value={{ isSidebarVisible, showSidebar, hideSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
