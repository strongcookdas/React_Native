import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  return (
    <View style={StyleSheet.container}>
      <Text>Meal Overview Screen - {catId}</Text>
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
