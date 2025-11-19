import React, { useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { handlePress, widthInterpolated } from "./AnimatedButton.services";
import { animatedButtonStyles } from "./AnimatedButton.styles";

export default function AnimatedButton() {
  const styles = animatedButtonStyles;
  const progress = useRef(new Animated.Value(0)).current;
  return (
    <Pressable onPress={() => handlePress(progress)} style={styles.button}>
      {/* fundo animado */}
      <Animated.View
        style={[styles.progress, { width: widthInterpolated(progress) }]}
      />
      {/* texto sobre a animação */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Carregar</Text>
      </View>
    </Pressable>
  );
}
