import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

const About = props => {
  return (
    <SafeAreaView>
      <Text>About</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("contact")}>
        <Text>Go to Contact</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default About;
