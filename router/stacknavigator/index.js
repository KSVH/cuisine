import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screen/Home";
import About from "../../screen/About";
import Category from "../../screen/Category";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
}

export default MyStack;
