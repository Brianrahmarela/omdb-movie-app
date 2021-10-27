import { combineReducers } from "redux";

import Counter from '../reducers/counter-reducer';
import getData from '../reducers/getData.reducers';
import moviesReducers from '../reducers/movieList.reducers';

const rootReducers = combineReducers({Counter, getData, moviesReducers})
export default rootReducers;