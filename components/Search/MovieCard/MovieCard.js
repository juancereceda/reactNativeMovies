import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import onBookmark from "../../../assets/onBookmark.png";
import addBookmark from "../../../assets/addBookmark.png";
import watched from "../../../assets/watched.png";
import watch from "../../../assets/watch.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieBookmark,
  removeMovieBookmark,
  addMovieWatched,
  removeMovieWatched,
} from "../../../actions/actions";

function MovieCard({ title, poster, id, year, navigation }) {
  const dispatch = useDispatch();
  let bookmarkMovies = useSelector((state) => state.bookmark);
  let watchedMovies = useSelector((state) => state.watched);

  function handleImagePress() {
    navigation.navigate("DetailScreen", { id });
  }

  function handleBookmarkPress(id) {
    bookmarkMovies.find((movie) => movie.imdbID === id)
      ? dispatch(removeMovieBookmark(id))
      : dispatch(addMovieBookmark(id));
  }

  function handleWatchedPress(id) {
    watchedMovies.find((movie) => movie.imdbID === id)
      ? dispatch(removeMovieWatched(id))
      : dispatch(addMovieWatched(id));
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handleImagePress()}>
        <Image
          style={styles.movieLogo}
          source={{
            uri: poster,
          }}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => handleBookmarkPress(id)}>
            <Image
              style={styles.addBookmarkAndWatched}
              source={
                bookmarkMovies.find((movie) => movie.imdbID === id)
                  ? onBookmark
                  : addBookmark
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleWatchedPress(id)}>
            <Image
              style={styles.addBookmarkAndWatched}
              source={
                watchedMovies.find((movie) => movie.imdbID === id)
                  ? watched
                  : watch
              }
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          {title} ({year})
        </Text>
      </View>
    </View>
  );
}

export default MovieCard;
