import axios from 'axios';

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST
  }
}
export const getDataSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result
  }
}
export const getDataFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error
  }
}

export const getData = () => {
  return function (dispatch){
    dispatch(getDataRequest());
    axios
    .get('http://www.omdbapi.com/?apikey=7b0482ff&s=spiderman')
    //dispatch result utk lakukan perubahan state di reducers
    .then((result) => dispatch(getDataSuccess(result.data)))
    .catch((error) => dispatch(getDataFailed(error)));
  }
}