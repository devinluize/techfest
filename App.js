import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Todolist from "./components/to-do-list/todolist";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Todolist></Todolist>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // alignItems: "center",
    // justifyContent: 'center',S
  },
});
