import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default function UpperBar() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://image.flaticon.com/icons/png/512/545/545705.png",
        }}
        style={styles.icon}
      />
    </View>
  );
}
