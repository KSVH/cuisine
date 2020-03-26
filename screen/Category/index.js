import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";

const Category = props => {
  return (
    <SafeAreaView>
      <Text>Category</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
        <Text>Return to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Category;
