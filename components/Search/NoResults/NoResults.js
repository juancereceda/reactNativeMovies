import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../NoMovie/styles";
import NotFound from "../../../assets/404.png";

function NoResults() {
  return (
    <View style={styles.container}>
      <Image source={NotFound} style={styles.img} />
      <Text style={styles.text}>No movies were found! MovieBot is sad 😔</Text>
    </View>
  );
}
export default NoResults;
