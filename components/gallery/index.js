import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { images, colors } from "../../global";

const ImageCustom = () => {
  return (
    <View style={styles.test}>
      <Image source={require("../../assets/imgrepeat.jpg")} style={styles.dimension} />
      <Text>qsdqsdqd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dimension: {
    height: 300,
    width: 200,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1
  },
  test: {
    backgroundColor: colors.primary
  }
});

export default ImageCustom;
