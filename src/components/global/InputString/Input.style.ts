import { ThemeProps } from "@/src/theme/ThemeProps";
import { DimensionValue, StyleSheet } from "react-native";

export const inputStyle = (colors: ThemeProps, width: DimensionValue) =>
  StyleSheet.create({
    input: {
      backgroundColor: colors.paper.background,
      width: "100%",
      borderRadius: 10,
      paddingLeft: 10,
      height: 60,
    },
    label: {
      color: colors.paper.text,
    },
    viewContainer: {
      width: width,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      rowGap: 15,
    },
  });
