import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, setState] = useState("light");
  return (
    <ThemeContext.Provider value={state}>
      <ThemeUpdateContext.Provider value={setState}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export const useUpdateTheme = () => useContext(ThemeUpdateContext);
