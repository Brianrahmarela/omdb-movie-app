import React from 'react';
import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from '../redux/actions/Counter'


const mapStateToProps = (props) => {
  console.log('mtsp props',props);
  return {
        valNumber: props.Counter.valNumber
    }
  
}
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => (
      dispatch(increaseCounter())
    ),
    decreaseCounter: () => (
      dispatch(decreaseCounter())
    )
  }
}
function CounterBtn(props) {
  console.log('props dari mstp mau render',props)

  return (
    <div>
      <button onClick={()=> {props.increaseCounter()}}>+</button>
      <h1>{props.valNumber}</h1>
      <button onClick={()=> {props.decreaseCounter()}}>-</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterBtn);
