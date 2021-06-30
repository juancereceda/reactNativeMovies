import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC947",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    color: "#0A1A31",
    borderStyle: "solid",
    borderColor: "#0A1A31",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: "5%",
    height: 40,
    width: "70%",
    paddingHorizontal: 10,
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    height: 60,
    alignItems: "center",
    paddingRight: "5%",
  },
  scrollview: {
    marginLeft: 20,
    paddingRight: 20,
  },
  noMovie: {
    color: "white",
    width: 500,
  },
});

export default styles;
