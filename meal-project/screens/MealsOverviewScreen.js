import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

function MealsOverviewScreen(props) {
  return (
    <View style={StyleSheet.container}>
      <Text>Meal Overview Screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
