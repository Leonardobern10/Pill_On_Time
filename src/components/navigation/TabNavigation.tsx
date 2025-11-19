import { ThemeProps } from "@/src/theme/ThemeProps";
import { useTheme } from "@/src/theme/ThemeProvider";
import { TabStyleType } from "@/src/types/TabStyleType";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router, Tabs } from "expo-router";
import { Pressable } from "react-native";
import TabBarIconRender from "./TabBarIconRender";
import { tabStyle } from "./TabNavigation.style";

function createScreenOptions(colors: ThemeProps) {
  return ({ route }: any) => ({
    headerStyle: { backgroundColor: colors.primary.background },
    headerTintColor: colors.primary.text,
    tabBarActiveTintColor: colors.primary.background,
    tabBarInactiveTintColor: colors.primary.text,
    tabBarStyle: {
      height: 90,
      paddingTop: 10,
      backgroundColor: colors.paper.background,
    },
    tabBarLabelStyle: { fontSize: 14 },
    tabBarIcon: ({ color }: { color: string }) => (
      <TabBarIconRender route={route} color={color} />
    ),
  });
}

const tabOptions = (
  title: string,
  backFunction: () => void,
  colors: ThemeProps,
  style: TabStyleType
) => ({
  title: title,
  headerLeft: () => (
    <Pressable onPress={backFunction} style={style.arrowBack}>
      <FontAwesome5 name="arrow-left" size={18} color={colors.primary.text} />
    </Pressable>
  ),
});

const tabScreenIndexOptions = {
  title: "Início",
  headerShown: false,
};

export default function TabNavigation() {
  const { colors } = useTheme();
  const handleBack = () => router.push("/");

  return (
    <Tabs initialRouteName="index" screenOptions={createScreenOptions(colors)}>
      <Tabs.Screen name="index" options={tabScreenIndexOptions} />
      <Tabs.Screen
        name="Pills"
        options={tabOptions("Remédio", handleBack, colors, tabStyle)}
      />
      <Tabs.Screen
        name="Add"
        options={tabOptions("Adicionar", handleBack, colors, tabStyle)}
      />
      <Tabs.Screen
        name="History"
        options={tabOptions("Histórico", handleBack, colors, tabStyle)}
      />
    </Tabs>
  );
}
