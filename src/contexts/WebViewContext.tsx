import useMediaQuery from "@mui/material/useMediaQuery";
import React, { type PropsWithChildren } from "react";

type ContextProps = {
  isPhone: boolean;
  isMobile: boolean;
  isNotebook: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  currentBreakPoint(): "xs" | "sm" | "md" | "lg";
};

const Context = React.createContext({} as ContextProps);

export const WebViewProvider = ({ children }: PropsWithChildren) => {
  const isPhone = useMediaQuery("(max-width:425px)");
  const isTablet = useMediaQuery("(min-width:426px) and (max-width:768px)");
  const isNotebook = useMediaQuery("(min-width:769px) and (max-width:1630px)");
  const isDesktop = useMediaQuery("(min-width:1631px)");

  const isMobile = isPhone || isTablet;

  function currentBreakPoint() {
    if (isDesktop) return "lg";
    if (isNotebook) return "md";
    if (isTablet) return "sm";
    if (isPhone) return "xs";
    return "md";
  }

  return (
    <Context.Provider
      value={{
        isMobile,
        isNotebook,
        isDesktop,
        isTablet,
        isPhone,
        currentBreakPoint,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useWebViewContext(): ContextProps {
  return React.useContext(Context);
}
