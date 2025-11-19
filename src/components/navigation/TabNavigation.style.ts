import { TabStyleType } from "@/src/types/TabStyleType";
import { StyleSheet } from "react-native";

export const tabStyle: TabStyleType = StyleSheet.create({
  arrowBack: {
    padding: 8,
    paddingLeft: 20,
    paddingRight: 10,
  },
});

export const tabScreenIndexOptions = {
  title: "Início",
  headerShown: false,
};
