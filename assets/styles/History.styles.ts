import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const historyStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    safeArea: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: colors.light.background,
      paddingTop: 5,
      paddingBottom: 5,
      padding: 10,
      width: "100%",
    },
    scrollView: {
      width: "100%",
      padding: 10,
      height: "auto",
    },
    view: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      rowGap: 20,
      width: "100%",
    },
  });
