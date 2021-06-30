import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "../Watched/styles";
import MovieCard from "../Search/MovieCard/MovieCard";

function Bookmark({ navigation }) {
  const bookmarkMovies = useSelector((state) => state.bookmark);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmark</Text>
      <ScrollView>
        {bookmarkMovies &&
          bookmarkMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                id={movie.imdbID}
                navigation={navigation}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}

export default Bookmark;
