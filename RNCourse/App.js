import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.appContainer}>
        <TextInput placeholder="You course goal!!"></TextInput>
        <Button title="Add Goal" />
      </View>
      <Text>List of goals...</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
