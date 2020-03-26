import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Home from "../../screen/Home";
import About from "../../screen/About";
import Category from "../../screen/Category";

const BottomTabNav = createBottomTabNavigator();

function BottomTab() {
  return (
    <BottomTabNav.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: {
          color: "#FF2E63"
        },
        tabStyle: {
          backgroundColor: "#EAEAEA"
        },
        style: {
          backgroundColor: "#EAEAEA"
        }
      }}
    >
      <BottomTabNav.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
      />
      <BottomTabNav.Screen
        name="category"
        component={Category}
        options={{
          tabBarLabel: "Categorie",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="clipboard-text" color={color} size={size} />
        }}
      />
      <BottomTabNav.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "A propos",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
      />
    </BottomTabNav.Navigator>
  );
}

export default BottomTab;
