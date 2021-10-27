import {GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED,} from '../actions/getData';
import {POST_SEARCH_REQUEST, POST_SEARCH_SUCCESS, POST_SEARCH_FAILED} from '../actions/searchData';

import {POST_ID_MOVIE_REQUEST, POST_ID_MOVIE_SUCCESS, POST_ID_MOVIE_FAILED} from '../actions/idMovie';

const initialState = {
  data: [],
  error: null,
}

const getData = (state=initialState, action) => {
  switch(action.type){

    //GET CASE
    case GET_DATA_REQUEST:
      console.log("sudah ambil data");
      return{
        ...state,
      }
    case GET_DATA_SUCCESS:

      return{
        ...state,
        data: action.result
      }
    case GET_DATA_FAILED:
      console.log(action.error);
      return{
        ...state,
        error: action.error
      }
      
      //GET ID CASE
      case POST_ID_MOVIE_REQUEST:
        console.log("sudah ambil data id movie");
        return{
          ...state,
        }
      case POST_ID_MOVIE_SUCCESS:
        console.log("ID_MOVIE_SUCCESS REDUCER", action);

        return{
          ...state,
          data: action.result
        }
      case POST_ID_MOVIE_FAILED:
        console.log(action.error);
        return{
          ...state,
          error: action.error
        }


    //POST CASE
    case POST_SEARCH_REQUEST:
      console.log('request reducer:', action)
      return state;
  
    case POST_SEARCH_SUCCESS:
      console.log('POST_SEARCH_SUCCESS reducer:', action)

        return {
            ...state,
            data: [
              action.result.Search
            ]

        };

    case POST_SEARCH_FAILED:
        console.log(action.error);
        return {
            ...state,
            error: action.error,
        };
    default: 
      return state;
  }
}

export default getData;