import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screen/Home";
import About from "../../screen/About";
import Category from "../../screen/Category";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Category" component={Category} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
