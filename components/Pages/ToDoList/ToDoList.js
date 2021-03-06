import React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Divider,
  Keyboard,
} from "react-native";

import Task from "./Task";

export default function ToDoList() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/*Todays Task Comp  */}
      <View style={styles.tasksWrapper}>
        <Text
          font-family="lucida grande', tahoma, verdana, arial, sans-serif"
          style={styles.sectionTitle}
        >
          What are we up to today?
        </Text>
        <Text color="#4f59b1">
          _____________________________________________
        </Text>
        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
          {/* <Task text={'task 1'} />
            <Task text={'task 2'} /> */}
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: "#4f59b1",
  },
  tasksWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    // paddingTop: 80,
    // paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "300",
    fontFamily: "lucida grande', tahoma, verdana, arial, sans-serif",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: -550,
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
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
