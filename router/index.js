import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppBottom from "./bottomnavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppBottom />
    </NavigationContainer>
  );
};

export default AppNavigator;
