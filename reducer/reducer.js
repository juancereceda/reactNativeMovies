import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE_BOOKMARK,
  ADD_MOVIE_WATCHED,
  REMOVE_MOVIE_BOOKMARK,
  REMOVE_MOVIE_WATCHED,
} from "../actions/actions";

const initialState = {
  movies: [],
  bookmark: [],
  watched: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.payload.Search,
      };
    }
    case GET_MOVIE_DETAIL: {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }
    case ADD_MOVIE_WATCHED: {
      return {
        ...state,
        watched: state.watched.concat(
          state.movies.find((movie) => movie.imdbID === action.payload)
        ),
      };
    }
    case ADD_MOVIE_BOOKMARK: {
      return {
        ...state,
        bookmark: state.bookmark.concat(
          state.movies.find((movie) => movie.imdbID === action.payload)
        ),
      };
    }
    case REMOVE_MOVIE_WATCHED: {
      return {
        ...state,
        watched: state.watched.filter((el) => el.imdbID !== action.payload),
      };
    }
    case REMOVE_MOVIE_BOOKMARK: {
      return {
        ...state,
        bookmark: state.bookmark.filter((el) => el.imdbID !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
