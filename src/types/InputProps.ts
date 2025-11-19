import { DimensionValue } from "react-native";

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  boxText?: boolean;
  keyboardType?: "default" | "number-pad";
  label: string;
  width?: DimensionValue | "100%";
};
