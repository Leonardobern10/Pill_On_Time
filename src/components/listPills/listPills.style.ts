import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const listPillsStyle = (color: ThemeProps) =>
  StyleSheet.create({
    pillsGroup: {
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 20,
      marginBottom: 20,
      rowGap: 40,
    },
  });
