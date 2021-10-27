import axios from "axios";
// import { Dispatch } from "redux";

export const MOVIE_LOADING = 'MOVIE_LOADING';
export const MOVIE_SUCCESS = 'MOVIE_SUCCESS';
export const MOVIE_ERROR = 'MOVIE_ERROR';

export const MovieLoading = () => {
  return {
    type: MOVIE_LOADING
  }
}
export const MovieSuccess = (result) => {
  return {
    type: MOVIE_SUCCESS,
    result
  }
}
export const MovieError = (error) => {
  return {
    type: MOVIE_ERROR,
    error
  }
}
export const getMovieList = (title, pages) => {
  console.log('title yg dicari sampe di action', title)
  console.log('page yg dicari sampe di action', pages)
  // if (title === ''){
  //   return function(dispatch) {
  //     pages = 1
  //     title = title
  //     console.log('hapus search, jlh page: ',pages )
  //     console.log('hapus search, title new: ',title )
  //     dispatch(MovieLoading())
  //     axios
  //       .get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${title}&page=${pages}`)
  //       .then((result) => dispatch(MovieSuccess(console.log('result after hapus search', result.data.Search))))
  //       .catch((error) => dispatch(MovieError(error)));
  //   }
  // } else{
    return function(dispatch) {
      dispatch(MovieLoading())
      axios
        .get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${title}&page=${pages}`)
        // .get(`http://www.omdbapi.com/?apikey=7b0482ff&s=${title}`)
        .then((result) => dispatch(MovieSuccess(result.data.Search)))
        .catch((error) => dispatch(MovieError(error)));
    }
  // }
}