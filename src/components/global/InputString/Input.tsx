import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { InputProps } from "@/src/types/InputProps";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { inputStyle } from "./Input.style";

export const nullPillsStyle = StyleSheet.create({
  style: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default function Input({
  value,
  onChangeText,
  placeholder,
  boxText,
  keyboardType,
  label,
  width,
}: InputProps) {
  const { colors } = useTheme();
  const currentWidth = width ? width : "100%";
  const style = inputStyle(colors, currentWidth);
  return (
    <View style={style.viewContainer}>
      <Text style={[typography(colors).body1, style.label]}>{label}</Text>
      <TextInput
        style={[typography(colors).body2, style.input]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        multiline={boxText}
        editable={boxText}
        numberOfLines={boxText ? 10 : undefined}
        cursorColor={colors.paper.text}
        keyboardType={keyboardType ?? "default"}
        placeholderTextColor={colors.light.text}
        selectionColor={colors.paper.text}
      />
    </View>
  );
}
