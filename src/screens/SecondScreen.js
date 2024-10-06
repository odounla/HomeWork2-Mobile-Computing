import React from "react";
import { Text, StyleSheet } from "react-native";

const SecondScreen = () => {
  return <Text style={styles.textStyle}>This is the second Screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SecondScreen;
