import { lightTheme } from "../theme/theme";
import { ThemeType } from "./ThemeType";

export type ThemeContextProps = {
  theme: ThemeType;
  colors: typeof lightTheme;
  toggleTheme: () => void;
};
