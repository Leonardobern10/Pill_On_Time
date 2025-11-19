import { ThemeProps } from "@/src/theme/ThemeProps";
import { StyleSheet } from "react-native";

export const buttonDefaultStyle = (colors: ThemeProps, press: boolean) =>
  StyleSheet.create({
    touchable: {
      backgroundColor: `${
        press ? colors.light.background : colors.primary.background
      }`,
      padding: 10,
      borderRadius: 10,
    },
    text: {
      color: `${press ? colors.paper.text : colors.dark.text}`,
      textAlign: "center",
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 8,
      paddingBottom: 8,
    },
  });
