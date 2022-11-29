import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
const MyCart = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <Text>MyCart</Text>
    </View>
  );
};
export default MyCart;
