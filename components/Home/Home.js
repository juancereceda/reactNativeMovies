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
        <View style={styles.listContainer}>
          <ScrollView horizontal={true} style={styles.scrollView}>
            {bookmark && bookmark.length > 0 ? (
              bookmark.map((movie) => {
                return (
                  <Image
                    style={styles.listMovie}
                    source={{ uri: movie.Poster }}
                  />
                );
              })
            ) : (
              <Text style={styles.notFound}>No movies on bookmark yet :(</Text>
            )}
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.listTitle}>Watched</Text>
        <View style={styles.listContainer}>
          <ScrollView horizontal={true} style={styles.scrollView}>
            {watched && watched.length > 0 ? (
              watched.map((movie) => {
                return (
                  <Image
                    style={styles.listMovie}
                    source={{ uri: movie.Poster }}
                  />
                );
              })
            ) : (
              <Text style={styles.notFound}>No watched movies yet :(</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
