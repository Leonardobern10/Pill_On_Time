import { Animated } from "react-native";

export const handlePress = (progress: Animated.Value) => {
  // reseta
  progress.setValue(0);
  // anima de 0 → 1 em 3s
  Animated.timing(progress, {
    toValue: 1,
    duration: 3000, // 3 segundos
    useNativeDriver: false, // width não pode usar NativeDriver
  }).start();
};

export const widthInterpolated = (progress: Animated.Value) =>
  progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
