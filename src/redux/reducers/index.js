import { combineReducers } from "redux";

import Counter from '../reducers/counter-reducer';
import getData from '../reducers/getData.reducers';

const rootReducers = combineReducers({Counter, getData})
export default rootReducers;