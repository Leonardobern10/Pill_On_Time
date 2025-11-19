import { ThemeProps } from "@/src/theme/ThemeProps";
import { ColorSchemeName, StyleSheet } from "react-native";

export const resumeStyles = (colors: ThemeProps, theme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: 150,
      minWidth: "48%",
      borderRadius: 10,
      backgroundColor: `${colors.paper.background}`,
      padding: 15,
      paddingTop: 10,
      paddingBottom: 20,
      rowGap: 10,
      boxShadow: `${
        theme === "dark"
          ? `1px 1px 1px #dddddd68, -1px 1px 1px #dddddd68, 1px -1px 1px #dddddd68, -1px -1px 1px #dddddd68`
          : `-1px -1px 1px ${colors.primary.background}`
      }`,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
