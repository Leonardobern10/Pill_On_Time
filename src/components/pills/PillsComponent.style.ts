import { ThemeProps } from "@/src/theme/ThemeProps";
import { PillStyle } from "@/src/types/PillType";
import { StyleSheet } from "react-native";

export const PillsComponenteStyle = (colors: ThemeProps, type: PillStyle) =>
  StyleSheet.create({
    viewContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      height: "auto",
      justifyContent: "space-between",
      padding: 20,
      boxShadow: `-5px 0px 1px ${
        type === "history"
          ? colors.success.background
          : colors.primary.background
      }`,
      borderRadius: 10,
      backgroundColor: `${colors.paper.background}`,
      rowGap: 20,
      width: "100%",
    },
    flexStartView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: 10,
    },
    flexRowBetweenView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      columnGap: 10,
      width: "auto",
    },
    pressableStyle: {},
    headerOptions: {
      position: "absolute",
      right: 0,
      top: -27,
      display: "flex",
      flexDirection: "row",
      columnGap: 5,
    },
    button: {
      width: "auto",
      height: "100%",
      backgroundColor: colors.paper.background,
      borderRadius: 5,
    },
    bodyContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    isHistory: {
      backgroundColor: `${
        type === "history" ? colors.success.background : colors.light.background
      }`,
      padding: 5,
      borderRadius: 30,
      width: "35%",
      opacity: 0.7,
    },
    takedText: {
      textAlign: "center",
      color: type === "history" ? colors.success.text : colors.paper.text,
    },
    obsView: {
      backgroundColor: `${colors.paper.background}`,
      padding: 10,
      borderRadius: 10,
      width: "100%",
    },
    modal: {
      flex: 1,
      paddingTop: 20,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center", // <-- centraliza verticalmente
      alignItems: "center",
    },
    modalContent: {
      width: "100%",
      display: "flex",
      flex: 1,
      padding: 20,
      borderRadius: 14,
      backgroundColor: colors.paper.background,
    },
  });
