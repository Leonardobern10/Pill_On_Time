import { StyleSheet } from "react-native";

export const animatedButtonStyles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ddd",
    justifyContent: "center",
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#4CAF50",
    width: "0%",
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
