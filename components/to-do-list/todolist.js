import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./Task";
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const taskhandler = () => {
    Keyboard.dismiss();
    console.log(task);
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const deletetask = (index) => {
    let itemscopy = [...taskItems];
    itemscopy.splice(index, 1);
    setTaskItems(itemscopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskwrap}>
        <Text style={styles.title}>Your tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            {
              return (
                <TouchableOpacity key={index} onPress={() => deletetask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writetask}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => taskhandler()}>
          <View style={styles.addwrap}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskwrap: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writetask: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addwrap: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addtext: {},
});
