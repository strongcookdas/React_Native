import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGealText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGealText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGealText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="You course goal!!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      ></TextInput>
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 5,
  },
});
