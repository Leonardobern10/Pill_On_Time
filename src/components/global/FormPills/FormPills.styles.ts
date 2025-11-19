import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const formPillsStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      rowGap: 20,
      height: "100%",
      paddingLeft: 20,
      paddingRight: 20,
    },
    safeArea: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
      backgroundColor: colors.light.background,
      width: "100%",
    },
    scroll: {
      width: "100%",
    },
    midleSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      columnGap: 10,
    },
  });
