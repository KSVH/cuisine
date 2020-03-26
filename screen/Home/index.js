import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "../../components/header/navbar";
import { colors, sizes } from "../../global";

const Home = () => {
  return (
    <ScrollView style={styles.background}>
      <Navbar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: colors.primary,
    fontSize: sizes.big
  },
  subtitle: {
    color: colors.background,
    fontSize: sizes.big,
    textAlign: "center",
    marginVertical: 10
  },
  background: {
    backgroundColor: colors.background
  },
  positionnement: {
    marginTop: 40,
    marginLeft: 10
  }
});

export default Home;
