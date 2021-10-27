import {MOVIE_LOADING, MOVIE_SUCCESS, MOVIE_ERROR,} from '../actions/movieList.actions';

const initialState = {
  loading: false,
  movies: [ ]
}

const moviesReducers = (state = initialState, action) => {
  console.log('STATE REDUCER', state)
  console.log('ACTION REDUCER', action)
  switch(action.type) {
    case MOVIE_LOADING: 
      return {
        ...state,
        loading: true
      }
    case MOVIE_SUCCESS:
      return {
        loading: false,
        movies: [
          // ...state.movies,
          ...action.result
        ]
      }
    case MOVIE_ERROR:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default moviesReducers