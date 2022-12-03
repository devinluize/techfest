import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import Mentorinfo from "./components/screens/Mentorinfo";
import Todolist from "./components/to-do-list/todolist";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todolist" component={Todolist} />
        <Stack.Screen name="Mentorinfo" component={Mentorinfo} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName={Home}
    //     screenOptions={({ route }) => ({
    //       tabBarActiveTintColor: "tomato",
    //       tabBarInactiveTintColor: "grey",
    //       tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
    //       tabBarStyle: { padding: 10, height: 70 },
    //       headerShown: false,
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;
    //         let rn = route.name;

    //         if (rn === Home) {
    //           iconName = focused ? "home" : "home-outline";
    //         } else if (rn === Todolist) {
    //           iconName = focused ? "list" : "list-outline";
    //         } else if (rn === Mentorinfo) {
    //           iconName = focused ? "settings" : "settings-outline";
    //         }
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //   >
    //     <Tab.Screen name={"Home"} component={Home} />
    //     <Tab.Screen name={"Todolist"} component={Todolist} />
    //     {/* <Stack.Screen name={"Mentorinfo"} component={Mentorinfo} /> */}
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;
