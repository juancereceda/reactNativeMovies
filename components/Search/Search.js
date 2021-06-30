import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/actions";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./styles";
import NoMovie from "./NoMovie/NoMovie.js";
import NoResults from "./NoResults/NoResults";

function Search({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [firstDispatch, setFirstDispatch] = useState(false);
  const movies = useSelector((state) => state.movies);

  async function handlePress() {
    title
      ? await dispatch(getMovies(title))
      : await dispatch(getMovies("adasdasdsdadsdsdsadas"));
    setFirstDispatch(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TextInput
          placeholder="Type a movie..."
          placeholderTextColor="#0A1A31"
          onChangeText={(text) => setTitle(text)}
          style={styles.inputText}
        />
        <Button onPress={() => handlePress()} title="Search" />
      </View>

      <ScrollView style={styles.scrollview}>
        {!firstDispatch ? (
          <NoMovie />
        ) : movies && movies.length > 0 ? (
          movies.map((el) => {
            return (
              <MovieCard
                key={el.imdbID}
                title={el.Title}
                poster={el.Poster}
                year={el.Year}
                id={el.imdbID}
                navigation={navigation}
              />
            );
          })
        ) : (
          <NoResults />
        )}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

export default Search;
