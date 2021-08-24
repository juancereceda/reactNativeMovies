import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../actions/actions";
import styles from "./styles";

function Detail({ route, navigation }) {
  const { id } = route.params;
  const movie = useSelector((state) => state.movieDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  return (
    <View style={styles.container}>
      {movie && movie.imdbID === id ? (
        <View style={styles.movieDetail}>
          <ScrollView>
            <Text style={styles.movieTitle}>
              {movie.Title} ({movie.Year})
            </Text>
            <Image
              style={styles.movieLogo}
              source={{
                uri: movie.Poster,
              }}
            />
            <Text style={styles.propTitle}>
              IMDb Rating: {movie.imdbRating}/10
            </Text>
            <Text style={styles.propTitle}>About</Text>
            <Text style={styles.propText}>{movie.Plot}</Text>
            <Text style={styles.propTitle}>Cast</Text>
            <Text style={styles.propText}>{movie.Actors}</Text>
            <Text style={styles.propTitle}>Directed by:</Text>
            <Text style={styles.propText}>{movie.Director}</Text>
            <Text style={styles.propTitle}>Written by:</Text>
            <Text style={styles.propText}>{movie.Writer}</Text>
            <Text style={styles.propTitle}>Genre</Text>
            <Text style={styles.propText}>{movie.Genre}</Text>
            <Text style={styles.propTitle}>Awards</Text>
            <Text style={styles.propText}>{movie.Awards}</Text>
          </ScrollView>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default Detail;
