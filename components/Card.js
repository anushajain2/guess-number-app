import React from "react";
import { View, Text, StyleSheet } from "react-native";

//presentabional component
const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    //shadow properties only work on iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //elevation only works on Android
    elevation: 5,
    // padding: 20,
    paddingTop: 30,
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
