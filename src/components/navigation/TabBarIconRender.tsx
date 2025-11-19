// TabBarIconRender.tsx
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ParamListBase, RouteProp } from "@react-navigation/native";

export default function TabBarIconRender({
  color,
  route,
}: {
  color: string;
  route: RouteProp<ParamListBase, string>;
}) {
  const iconMap: Record<string, string> = {
    index: "home",
    Pills: "pills",
    Add: "plus",
    History: "history",
  };

  const iconName = iconMap[route.name] ?? "circle";

  return <FontAwesome5 name={iconName} size={20} color={color} />;
}
