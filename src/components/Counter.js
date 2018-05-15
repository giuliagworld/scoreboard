import React from 'react';

const Counter = props => {
  return (
    <div className="counter">
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action decrement" onClick={function () {props.onChange(-1)}}> - </button>
      <button className="counter-action increment" onClick={function () {props.onChange(+1)}}> + </button>
    </div>
  )
}

export default Counter