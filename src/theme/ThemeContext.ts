import { createContext } from "react";
import { ThemeContextProps } from "../types/ThemeContextProps";
import { lightTheme } from "./theme";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  colors: lightTheme,
  toggleTheme: () => {},
});
