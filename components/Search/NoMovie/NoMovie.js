import React from "react";
import { View, Text, Image } from "react-native";
import Cinema from "../../../assets/cinema.png";
import styles from "./styles";

function NoMovie() {
  return (
    <View style={styles.container}>
      <Image source={Cinema} style={styles.img} />
      <Text style={styles.text}>
        Please, to get movie results, type up here in the search bar!
      </Text>
    </View>
  );
}
export default NoMovie;
