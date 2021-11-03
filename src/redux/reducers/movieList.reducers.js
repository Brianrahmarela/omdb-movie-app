import {
  MOVIE_LOADING,
  MOVIE_SUCCESS,
  MOVIE_ERROR,
  EMPTY_MOVIE,
  MORE_MOVIE
} from "../actions/movieList.actions";

const initialState = {
  loading: false,
  movies: [],
  moviesTemp: []
};

const moviesReducers = (state = initialState, action) => {
  // console.log("STATE REDUCER", state);
  // console.log("ACTION REDUCER", action);
  console.log('state moviesNewScroll : ', state.moviesTemp)
  switch (action.type) {
    case EMPTY_MOVIE:
      return {
        movies: [],
        loading: true
      };
    case MOVIE_LOADING:
      return {
        ...state,
        loading: true
      };
    case MOVIE_SUCCESS:
      console.log('action result bfr slice', action.result);
      const moviesOneToFive = action.result.slice(0, 5);
      console.log('result index 0-4',moviesOneToFive);
      const moviesNewScroll = action.result.slice(5,10);
      console.log('result index 5-9',moviesNewScroll);

      return {
        loading: false,
        movies: [...state.movies, ...moviesOneToFive],
        moviesTemp: [...moviesNewScroll]
      };
    case MORE_MOVIE:
      // alert('msk more movie reducer')
      // console.log('MOVIE MORE REDUCER',state.movies)
      // console.log('TEMP MORE REDUCER',state.moviesTemp)
      // const arr1 = [state.movies]
      // const arr2 = [state.moviesTemp]
      // const newMovie = [...arr1,...arr2]
      // console.log('NEW MOVIE:',newMovie)
      // const moviesOneToFiveScroll = state.moviesTemp.slice(0,4);
      // const moviesOneToFiveScroll = action.result.slice(0, 5);
      //       const moviesNewScroll = action.result.slice(5,10);


      return {
        // ...state,
        movies: [...state.movies,...state.moviesTemp],
        moviesTemp: []

        // movies: [...state.movies, ...state.moviesTemp]
      };
    case MOVIE_ERROR:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default moviesReducers;
