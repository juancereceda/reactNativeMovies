import React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC947",
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 25,
  },
  listMovie: {
    height: 180,
    width: 120,
    marginHorizontal: 10,
  },
  listContainer: {
    height: 180,
    backgroundColor: "#343a40",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.9,
    shadowRadius: 19.0,

    elevation: 24,
  },
  listTitle: {
    marginVertical: 25,
    paddingLeft: 10,
    fontSize: 25,
    color: "#343a40",
    fontWeight: "bold",
  },
});

export default styles;
