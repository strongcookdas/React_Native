import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstrunctionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstrunctionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
