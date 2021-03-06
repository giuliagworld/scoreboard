import React from 'react';

const Counter = props => {
  return (
    <div className="counter">
      <div className="counter-score">{props.score}</div>
      <button className="counter-action decrement" onClick={() => {props.updatePlayerScore(props.index, -1)}}> - </button>
      <button className="counter-action increment" onClick={() => {props.updatePlayerScore(props.index, 1)}}> + </button>
    </div>
  )
}

export default Counter