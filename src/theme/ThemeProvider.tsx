import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeType } from "../types/ThemeType";
import { darkTheme, lightTheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemTheme = useColorScheme(); // "light" | "dark"
  const [theme, setTheme] = useState<ThemeType>(systemTheme ?? "light");

  // 🔄 Carregar tema salvo no AsyncStorage
  useEffect(() => {
    const loadStoredTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("@app_theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
      } else {
        setTheme(systemTheme ?? "light");
      }
    };
    loadStoredTheme();
  }, [systemTheme]);

  // 💾 Salvar tema no AsyncStorage quando mudar
  useEffect(() => {
    AsyncStorage.setItem("@app_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
