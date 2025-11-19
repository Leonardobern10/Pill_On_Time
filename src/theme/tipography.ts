import { StyleSheet } from "react-native";
import { ThemeProps } from "./ThemeProps";

export const typography = (theme: ThemeProps) =>
  StyleSheet.create({
    companyName: {
      fontSize: 30,
      color: `${theme.primary.background}`,
      fontFamily: "Montserrat_700Bold",
    },
    heading1: {
      fontSize: 30,
      lineHeight: 30,
      fontFamily: "Montserrat_700Bold",
      color: `${theme.paper.text}`,
    },
    heading2: {
      fontSize: 22,
      fontFamily: "Montserrat_600SemiBold",
      lineHeight: 45,
      color: `${theme.paper.text}`,
    },
    heading3: {
      fontSize: 15,
      lineHeight: 40,
      color: `${theme.paper.text}`,
      fontFamily: "Montserrat_600SemiBold",
    },
    body1: {
      fontSize: 18,
      lineHeight: 25,
      color: `${theme.paper.text}`,
      fontFamily: "Montserrat_500Medium",
    },
    body2: {
      fontFamily: "Montserrat_400Regular",
      fontSize: 17,
      lineHeight: 20,
      color: `${theme.paper.text}`,
    },
    caption: {
      fontSize: 15,
      lineHeight: 15,
      color: `${theme.paper.text}`,
      fontFamily: "Montserrat_300Light",
    },
  });
