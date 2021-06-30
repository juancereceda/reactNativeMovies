import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import MovieCard from "../Search/MovieCard/MovieCard";
import { useSelector } from "react-redux";

function Watched({ navigation }) {
  const watchedMovies = useSelector((state) => state.watched);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watched</Text>
      <ScrollView>
        {watchedMovies &&
          watchedMovies.map((movie) => {
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

export default Watched;
