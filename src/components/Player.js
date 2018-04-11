import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Counter from './Counter';

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <div className="counter-score"> {props.score} </div>
      </div>
      <Counter score={props.score} />
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

export default Player;