import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>Here you will have some watched and Bookmark movies</Text>
    </View>
  );
}
