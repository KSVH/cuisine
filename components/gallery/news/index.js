import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { images, colors } from "../../../global";

const ImageNews = () => {
  return (
    <View style={styles.row}>
      <Image source={require("../../../assets/imgrepeat.jpg")} style={styles.dimension} />
      <Image source={require("../../../assets/imgrepeat.jpg")} style={styles.dimension} />
    </View>
  );
};

const styles = StyleSheet.create({
  dimension: {
    height: 300,
    width: 150,
    borderColor: colors.background,
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: 10
  },
  row: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row"
  }
});

export default ImageNews;
