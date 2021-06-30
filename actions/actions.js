import axios from "axios";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_BOOKMARK = "ADD_MOVIE_BOOKMARK";
export const ADD_MOVIE_WATCHED = "ADD_MOVIE_WATCHED";
export const REMOVE_MOVIE_WATCHED = "REMOVE_MOVIE_WATCHED";
export const REMOVE_MOVIE_BOOKMARK = "REMOVE_MOVIE_BOOKMARK";

export function getMovies(title) {
  return async function (dispatch) {
    let results = await axios.get(
      `https://www.omdbapi.com/?apikey=20dac387&s=${title}&type=movie`
    );
    dispatch({ type: GET_MOVIES, payload: results.data });
  };
}

export function getMovieDetail(id) {
  return async function (dispatch) {
    let result = await axios.get(
      `http://www.omdbapi.com/?apikey=20dac387&i=${id}&plot=full`
    );
    dispatch({ type: GET_MOVIE_DETAIL, payload: result.data });
  };
}

export function addMovieWatched(id) {
  return function (dispatch) {
    dispatch({ type: ADD_MOVIE_WATCHED, payload: id });
  };
}

export function addMovieBookmark(id) {
  return function (dispatch) {
    dispatch({ type: ADD_MOVIE_BOOKMARK, payload: id });
  };
}

export function removeMovieWatched(id) {
  return function (dispatch) {
    dispatch({ type: REMOVE_MOVIE_WATCHED, payload: id });
  };
}

export function removeMovieBookmark(id) {
  return function (dispatch) {
    dispatch({ type: REMOVE_MOVIE_BOOKMARK, payload: id });
  };
}
