import { useTheme } from "@/src/theme/ThemeProvider";
import { typography } from "@/src/theme/tipography";
import { ButtonDefaultProps } from "@/src/types/ButtonDefaultProps";
import { Text, TouchableOpacity } from "react-native";
import { buttonDefaultStyle } from "./ButtonDefault.styles";
import { useButtonCountdown } from "./useButtonCountdown";

export default function ButtonDefault({
  press,
  textDefault,
  textPressed,
  setStatus,
  onComplete,
}: ButtonDefaultProps) {
  const { colors } = useTheme();
  const style = buttonDefaultStyle(colors, press);
  const { handlePress } = useButtonCountdown({
    press,
    setStatus,
    onComplete,
    delay: 5000,
  });

  return (
    <TouchableOpacity onPress={handlePress} style={style.touchable}>
      <Text style={[typography(colors).body1, style.text]}>
        {press ? textPressed : textDefault}
      </Text>
    </TouchableOpacity>
  );
}
