import React, {useState} from 'react';

const hitung = (val) => {
    if(val % 3 === 0 &&  val % 5 === 0){
      return "Fizz-Buzz";
    } else if(val % 3 === 0) {
      return "Fizz";
    } else if(val % 5 === 0) {
      return "Buzz";
    } else {
      return val;
    }
}

const FizzBuzz = () => {
  const [val] = useState(13)

  return (
    <div>
      <h2>{hitung(val)}</h2>
    </div>
  )
}

export default FizzBuzz
