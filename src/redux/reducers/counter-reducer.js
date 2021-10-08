import {INCREMENT, DECREMENT} from '../actions/Counter';

const initialState = {
  valNumber : 0
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // console.log(...prevState);
      return{
        ...state,
        valNumber: state.valNumber + 1
      }  
    case DECREMENT:
      console.log('decrement', state.valNumber);
      if(state.valNumber > 0 ){
        return{
          ...state,
          valNumber: state.valNumber - 1,
        };
      } else {
        return state
      
      }
    default:
      return state;
  }
}

export default counter;
