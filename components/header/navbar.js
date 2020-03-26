import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { colors, sizes } from "../../global";

const Navbar = () => {
  return (
    <SafeAreaView width="100%" height={100} style={styles.navbar}>
      <Text style={styles.titleHeader}>AZIR</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  navbar: {
    backgroundColor: colors.secondary
  },
  titleHeader: {
    color: colors.primary,
    textAlign: "center",
    fontSize: sizes.titles.big
  }
});

export default Navbar;
