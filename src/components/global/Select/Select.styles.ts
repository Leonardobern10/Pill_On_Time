import { ThemeProps } from "@/src/theme/ThemeProps";
import { DimensionValue, StyleSheet } from "react-native";

export const selectStyle = (width: DimensionValue, colors: ThemeProps) =>
  StyleSheet.create({
    componentContainer: {
      width: width,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      rowGap: 15,
    },
    selectContainer: {
      width: "100%",
      backgroundColor: colors.paper.background,
      borderRadius: 10,
      height: 60,
      justifyContent: "center",
      paddingLeft: 10,
    },
    picker: {
      width: "100%",
      color: colors.paper.text,
      fontSize: 17,
    },
    item: {
      color: colors.paper.text,
    },
  });
