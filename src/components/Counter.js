import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

function Counter(props) {
  return (
    <div className="counter">
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action decrement" onClick={function () {props.onChange(-1)}}> - </button>
      <button className="counter-action increment" onClick={function () {props.onChange(+1)}}> + </button>
    </div>
  )
}

export default Counter;