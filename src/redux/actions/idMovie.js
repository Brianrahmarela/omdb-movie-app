import axios from 'axios';

export const POST_ID_MOVIE_REQUEST = "POST_ID_MOVIE_REQUEST"
export const POST_ID_MOVIE_SUCCESS= "POST_ID_MOVIE_SUCCESS"
export const POST_ID_MOVIE_FAILED = "POST_ID_MOVIE_FAILED"

export const postIDMovieRequest = () => {
  return{
    type: POST_ID_MOVIE_REQUEST,
  }
}
export const postIDMovieSuccess = (result) => {
  console.log('postIDMovieSuccess',result )
  return{
    type: POST_ID_MOVIE_SUCCESS,
    result,
  }
}
export const postIDMovieError = (error) => {
  return{
    type: POST_ID_MOVIE_FAILED,
    error,
  }
}

export const postIDMovie = (idMovie) => {
  console.log('idMovie actions', idMovie);
  return function (dispatch){
    dispatch(postIDMovieRequest())
    axios
      .post(`http://www.omdbapi.com/?apikey=7b0482ff&i=${idMovie}`)
      .then(result => dispatch(postIDMovieSuccess(result.data)))
      .catch(error => dispatch(postIDMovieError(error)))
  }
}