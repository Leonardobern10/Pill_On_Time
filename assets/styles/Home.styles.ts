import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const headerStyle = (colors: ThemeProps) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.light.background,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: colors.paper.background,
      padding: 20,
    },
    headerContainerIcons: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 10,
    },
    iconStyle: {
      opacity: 0.5,
    },
    scrollStyle: {
      padding: 20,
    },
    pillsGroup: {
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 20,
      marginBottom: 20,
      rowGap: 20,
    },
  });
