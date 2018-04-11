import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired
}

export default Counter;