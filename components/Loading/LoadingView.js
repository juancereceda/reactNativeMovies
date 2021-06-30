import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Loader from "../../assets/loader.png";

function Landing() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Loader} />
      <Text style={styles.appName}>MovieApp!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC947",
  },
  logo: {
    width: 130,
    height: 130,
  },
  appName: {
    color: "white",
    fontSize: 50,
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default Landing;
