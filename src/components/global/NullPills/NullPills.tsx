import { ThemeProps } from "@/src/theme/ThemeProps";
import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import Fontisto from "@expo/vector-icons/Fontisto";
import { StyleSheet, Text, View } from "react-native";

export const nullPillsStyle = StyleSheet.create({
  style: {
    marginTop: 10,
    marginBottom: 20,
  },
});

function NullPIllsComponent({ colors }: { colors: ThemeProps }) {
  return (
    <View style={nullPillsStyle.style}>
      <Fontisto name="pills" size={120} color={colors.paper.text} />
    </View>
  );
}

const containerNullPills = StyleSheet.create({
  style: {
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function NullPIlls({ text }: { text: string }) {
  const { colors } = useTheme();
  return (
    <View style={containerNullPills.style}>
      <NullPIllsComponent colors={colors} />
      <Text style={typography(colors).body1}>{text}</Text>
    </View>
  );
}
