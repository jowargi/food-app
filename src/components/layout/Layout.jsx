import { createContext, useContext, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Layout.module.css";
import LayoutComponentModal from "../layoutComponentModal/LayoutComponentModal";
import ScrollProgressBar from "../scrollProgressBar/ScrollProgressBar";
import CartModalContextProvider from "../cartModalContextProvider/CartModalContextProvider";
import CartModal from "../cartModal/CartModal";
import CartContainer from "../cart/CartContainer";

const SidebarContext = createContext({
  isSidebarVisible: null,
  setIsSidebarVisible: () => null,
});

export const useSidebarContext = () => useContext(SidebarContext);

export default function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, setIsSidebarVisible }}>
      <CartModalContextProvider>
        <LayoutComponentModal
          style={{ position: "fixed", left: 0, top: 0, zIndex: 2000 }}
        >
          <ScrollProgressBar />
        </LayoutComponentModal>
        <LayoutComponentModal
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1000,
          }}
        >
          <Sidebar />
        </LayoutComponentModal>
        <CartModal>
          <CartContainer />
        </CartModal>
        <div
          className={styles.container}
          style={{ marginLeft: isSidebarVisible ? "20vw" : 0 }}
        >
          <Header />
          <Main />
          <Footer />
        </div>
      </CartModalContextProvider>
    </SidebarContext.Provider>
  );
}
