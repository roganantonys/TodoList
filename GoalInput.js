import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.modelVisibility} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goals"
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Back" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    padding: 8,
    backgroundColor: "#1e085a",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    padding: 16,
    borderRadius:6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
