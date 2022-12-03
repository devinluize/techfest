import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { COLOURS } from "../database/Database";
const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <TouchableOpacity>
          <Octicons
            name="checklist"
            style={{
              fontSize: 22,
              // backgroundColor: COLOURS.black,
              color: COLOURS.green,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>

        <Text style={styles.itemtext}>{props.text}</Text>
      </View>

      {/* <View style={styles.circular}></View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    // borderColor: "#425471",
    // borderWidth: 1,
  },
  itemleft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: "#59D9A8",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemtext: {
    maxWidth: "100%",
  },
  text: {},
  circular: {
    width: 12,
    height: 12,
    borderColor: "#59D9A8",
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Task;
