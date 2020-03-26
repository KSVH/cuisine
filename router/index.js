import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppBottom from "./bottomnavigator";
import AppDrawer from "./wrappernavigator";
import AppStack from "./stacknavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default AppNavigator;
