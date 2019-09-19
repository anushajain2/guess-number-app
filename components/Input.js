import React from "react";
import { TextInput, StyleSheet } from "react-native";

//presentabional component
const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: "grey",
    borderWidth: 1,
    marginHorizontal: 10,
    textAlign: "center"
  }
});

export default Input;
