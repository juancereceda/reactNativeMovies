import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import UpperBar from "./UpperBar/UpperBar";

export default function HomeScreen() {
  const bookmark = useSelector((state) => state.bookmark);
  const watched = useSelector((state) => state.watched);
  return (
    <View style={styles.container}>
      <UpperBar />
      <View>
        <Text style={styles.listTitle}>Bookmark</Text>
        {bookmark && bookmark.length > 0 ? (
          <View style={styles.listContainer}>
            <ScrollView horizontal={true} style={styles.scrollView}>
              {bookmark.map((movie) => {
                return (
                  <Image
                    style={styles.listMovie}
                    source={{ uri: movie.Poster }}
                  />
                );
              })}
            </ScrollView>
          </View>
        ) : (
          <Text>Hey</Text>
        )}
      </View>
      <View>
        <Text style={styles.listTitle}>Watched</Text>
        {watched && watched.length > 0 ? (
          <View style={styles.listContainer}>
            <ScrollView horizontal={true} style={styles.scrollView}>
              {watched.map((movie) => {
                return (
                  <Image
                    style={styles.listMovie}
                    source={{ uri: movie.Poster }}
                  />
                );
              })}
            </ScrollView>
          </View>
        ) : (
          <Text>Hey</Text>
        )}
      </View>
    </View>
  );
}
