import axios from 'axios';

export const ID_MOVIE_REQUEST = "ID_MOVIE_REQUEST"
export const ID_MOVIE_SUCCESS= "ID_MOVIE_SUCCESS"
export const ID_MOVIE_FAILED = "ID_MOVIE_FAILED"

export const postIDMovieRequest = () => {
  return{
    type: ID_MOVIE_REQUEST,
  }
}
export const postIDMovieSuccess = (result) => {
  return{
    type: ID_MOVIE_SUCCESS,
    result,
  }
}
export const postIDMovieError = (error) => {
  return{
    type: ID_MOVIE_FAILED,
    error,
  }
}

export const postIDMovie = (idMovie) => {
  console.log('idMovie actions', idMovie);
  return function (dispatch){
    dispatch(postIDMovieRequest())
    axios
      // .post('http://www.omdbapi.com/?apikey=7b0482ff&s=',{search : idMovie})
      .post(`http://www.omdbapi.com/?apikey=7b0482ff&i=${idMovie}`)
      .then(result => dispatch(postIDMovieSuccess(result.data)))
      .catch(error => dispatch(postIDMovieError(error)))
  }
}