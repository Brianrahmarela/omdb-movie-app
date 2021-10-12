import axios from 'axios';

export const POST_SEARCH_REQUEST = "POST_SEARCH_REQUEST"
export const POST_SEARCH_SUCCESS= "POST_SEARCH_SUCCESS"
export const POST_SEARCH_FAILED = "POST_SEARCH_FAILED"

export const postSearchRequest = () => {
  return{
    type: POST_SEARCH_REQUEST,
  }
}
export const postSearchSuccess = (result) => {
  return{
    type: POST_SEARCH_SUCCESS,
    result,
  }
}
export const postSearchError = (error) => {
  return{
    type: POST_SEARCH_FAILED,
    error,
  }
}

export const postSearch = (newSearch) => {
  console.log('newsearch action', newSearch)
  return function (dispatch){
    dispatch(postSearchRequest())
    axios
      .post(`http://www.omdbapi.com/?apikey=7b0482ff&s=${newSearch}`)
      .then(result => dispatch(postSearchSuccess(result.data)))
      .catch(error => dispatch(postSearchError(error)))
  }
}