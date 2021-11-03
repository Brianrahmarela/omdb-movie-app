import axios from "axios";

export const MOVIE_LOADING = "MOVIE_LOADING";
export const MOVIE_SUCCESS = "MOVIE_SUCCESS";
export const MOVIE_ERROR = "MOVIE_ERROR";
export const EMPTY_MOVIE = "EMPTY_MOVIE";
export const MORE_MOVIE = "MORE_MOVIE";

export const MovieLoading = () => {
  return {
    type: MOVIE_LOADING
  };
};
export const MovieSuccess = (result) => {
  return {
    type: MOVIE_SUCCESS,
    result
  };
};
export const MovieError = (error) => {
  return {
    type: MOVIE_ERROR,
    error
  };
};

export const emptyMovie = () => {
  return {
    type: EMPTY_MOVIE
  };
};

export const moreMoview = () => {
  return {
    type: MORE_MOVIE
  };
};

export const getMovieList = (title, pages) => {
  console.log("title yg dicari sampe di action", title);
  console.log("page yg dicari sampe di action", pages);

  return function (dispatch) {
    dispatch(MovieLoading());
    let cancel;
    axios({
      method: "GET",
      url: `https://www.omdbapi.com/?apikey=faf7e5bb&`,
      params: { s: title, page: pages },
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((result) => dispatch(MovieSuccess(result.data.Search)))
      .catch((error) => dispatch(MovieError(error)));

    return () => cancel();
  };
};
