import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { SelectProps } from "@/src/types/SelectProps";
import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";
import { inputStyle } from "../InputString/Input.style";
import { selectStyle } from "./Select.styles";

export default function Select({
  selectData,
  selectValue,
  setSelectValue,
  label,
  width,
}: SelectProps) {
  const { colors } = useTheme();
  const currentWidth = width ? width : "100%";
  const style = selectStyle(currentWidth, colors);

  return (
    <View style={style.componentContainer}>
      <Text
        style={[
          typography(colors).body1,
          inputStyle(colors, currentWidth).label,
        ]}
      >
        {label}
      </Text>
      <View style={style.selectContainer}>
        <Picker
          selectedValue={selectValue}
          onValueChange={(itemValue) => setSelectValue(itemValue)}
          dropdownIconColor={colors.paper.text}
          style={style.picker}
          itemStyle={typography(colors).body1}
        >
          {selectData.map((el) =>
            typeof el === "string" ? (
              <Picker.Item
                style={[typography(colors).body1, style.item]}
                label={el}
                value={el}
                key={el}
              />
            ) : (
              <Picker.Item
                style={[typography(colors).body1, style.item]}
                label={el.title}
                value={el.title}
                key={el.id}
              />
            )
          )}
        </Picker>
      </View>
    </View>
  );
}
