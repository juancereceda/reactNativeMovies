import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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
        <Text>{movie.Title}</Text>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
}

export default Detail;
