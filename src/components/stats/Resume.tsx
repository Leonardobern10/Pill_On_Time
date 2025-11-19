import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { ResumeProps } from "@/src/types/ResumeProps";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, useColorScheme, View } from "react-native";
import { resumeStyles } from "./Resume.styles";

export default function Resume({
  title,
  value,
  icon,
  colorIcon,
  desc,
}: ResumeProps) {
  const colorRender = colorIcon ? colorIcon : "black";
  const { colors } = useTheme();
  const theme = useColorScheme();
  const style = resumeStyles(colors, theme);

  return (
    <View style={style.container}>
      <View>
        <Text style={typography(colors).heading3}>{title}</Text>
      </View>
      <View style={style.content}>
        <Text style={[typography(colors).heading1, { width: "auto" }]}>
          {value}
        </Text>
        {icon === "pills" ? (
          <FontAwesome5 name="pills" size={30} color={colorRender} />
        ) : (
          <AntDesign name={icon} size={30} color={colorRender} />
        )}
      </View>
      <View>
        <Text style={typography(colors).caption}>{desc}</Text>
      </View>
    </View>
  );
}
